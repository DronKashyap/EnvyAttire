// app/api/cart/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next'; 
import { NEXT_AUTH_CONFIG as authOptions } from '@/lib/auth';
import client from "@/db"; 

export async function POST(req: Request) {
 
  const session = await getServerSession({ req, ...authOptions }); 

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: 'Unauthorized', redirect: '/signup' }, { status: 401 });
  }

  const { productId } = await req.json(); 

  if (!productId) {
    return NextResponse.json({ message: 'Product ID is required' }, { status: 400 });
  }
  
  console.log(req.body)

  try {
    const user = await client.user.update({
      where: { email: session.user.email },
      data: {
        cartproductid: {
          push: parseInt(productId, 10), 
        },
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ message: 'Error adding to cart' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email provided' }, { status: 400 });
  }

  try {
    const user = await client.user.findUnique({
      where: { email },
      select: { cartproductid: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user.cartproductid, { status: 200 });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return NextResponse.json({ error: 'Error fetching cart items' }, { status: 500 });
  }
}