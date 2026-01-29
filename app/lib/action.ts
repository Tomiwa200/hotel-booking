'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';
import bcrypt from "bcrypt";
import postgres from 'postgres';
import { getUserByEmail } from './data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

 const FormSchema = z.object({
    hotel_id: z.string(),
    room_id: z.string({
      error: 'Please select a room type.',
    }),
    start_date: z.string(),
    end_date: z.string(),
  });


 const SignupSchema = z.object({
  email: z.email("Invalid email address").trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export type State = {
  errors?: {
    room_id?: string[];
  };
  message?: string | null;
} 
export type SignupState = {
  errors?: {
    email?: string[];
    password?: string[];
    name?: string[];
  };
  message?: string | null;
} 
 

export default async function bookHotel(
  user_id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedForm = FormSchema.safeParse({
    hotel_id: formData.get('hotelId'),
    room_id: formData.get('roomId') ,
    start_date: formData.get('start_date'),
    end_date: formData.get('end_date'),
  });

  
  if (!validatedForm.success) {
    const flattenedErrors = z.flattenError(validatedForm.error).fieldErrors;
  
  return {
    errors: flattenedErrors,
  };
  }

    const { hotel_id, room_id, start_date, end_date } = validatedForm.data;
    const status = 'confirmed';
  try{
        await sql`INSERT INTO bookings (user_id, hotel_id, room_id, start_date, end_date, status)
        VALUES (${user_id}, ${hotel_id}, ${room_id}, ${start_date}, ${end_date}, ${status})
    `;
   }catch(error){
    console.error('Database Error:', error);
       return {message: 'Database Error: Failed to create booking.' }
   }
   
  revalidatePath('/hotels/bookings');
  redirect('/hotels/bookings');
}

export async function deleteBooking(id: string) {
  await sql`DELETE FROM bookings WHERE id = ${id}`;
  revalidatePath('/hotels/bookings');
}


export async function signUp(
 prevState: SignupState | undefined,
  formData: FormData,
)  {
    const validatedForm = SignupSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
  });

  
  if (!validatedForm.success) {
    const flattenedErrors = z.flattenError(validatedForm.error).fieldErrors;

  return {
    errors: flattenedErrors,
  };
  }

   const { email, password, name } = validatedForm.data;
  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { message: "An account with this email already exists." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try{
    await sql`INSERT INTO users (email, password_hash, name)
               VALUES (${email}, ${hashedPassword}, ${name})
    `;
      await signIn("credentials", { email, password});
  }catch(error){
     console.error('Database Error:', error);
       return {message: 'Database Error: Failed to create user.' }
   }
     redirect('/auth/login');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}