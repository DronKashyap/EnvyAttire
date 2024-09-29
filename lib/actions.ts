"use server";

import client from "@/db";
import bcrypt from 'bcrypt';

export const signup = async (username: string, password: string): Promise<any> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await client.user.create({
      data: {
        username,
        password: hashedPassword, 
        email: username, 
      },
    });

    return { id: user.id, username: user.username, email: user.email }; 
  } catch (error) {
    console.error('Error during signup:', error);
    return null;
  }
};
