"use server"

import client from "@/db"
import bcrypt from 'bcrypt';


export const signup = async (username: string, password: string) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); 
  
      const user = await client.user.create({
        data: {
          username,
          password: hashedPassword, 
        },
      });
  
      return user;
    } catch (error) {
      console.error('Error during signup:', error);
      return null;
    }
  };