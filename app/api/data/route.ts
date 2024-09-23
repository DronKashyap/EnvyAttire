// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://asos10.p.rapidapi.com/api/v1/getCategories', {
      headers: {
        'x-rapidapi-host': 'asos10.p.rapidapi.com',
        'x-rapidapi-key': process.env.DATA_API_KEY,
      },
    });

    const brands = response.data.data.brands.map((brand: any) => ({
      brandTitle: brand.content.title,
      categories: brand.children.map((child: any) => ({
        categoryTitle: child.content.title,
        categoryId: child.link?.categoryId ?? null,
      })),
    }));

    // Send structured data to the client
    res.status(200).json({ brands });
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
