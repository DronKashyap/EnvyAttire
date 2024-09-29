import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('https://asos10.p.rapidapi.com/api/v1/getCategories', {
      headers: {
        'x-rapidapi-host': 'asos10.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_DATA_API_KEY,  
      },
    });

    const brandsData = response.data.data.brands.map((brand: any) => ({
      brandTitle: brand.content.title,
      categories: brand.children.map((child: any) => ({
        categoryTitle: child.content.title,
        categoryId: child.link?.categoryId ?? null,
      })),
    }));

    const navigationData = response.data.data.navigation;

    return { brandsData, navigationData };
  } catch (error) {
    console.error('Error fetching or processing category data:', error);
    return { brandsData: [], navigationData: {} };
  }
};


export const fetchProductsByCategory = async (categoryId: number) => {
  try {
    const response = await axios.get(`https://asos10.p.rapidapi.com/api/v1/getProductList?categoryId=${categoryId}`, {
      headers: {
        'x-rapidapi-host': 'asos10.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_DATA_API_KEY,
      },
    });

    const productsData = response.data.data.products.map((product: any) => ({
      productId: product.id,
      name:product.name,
      price: product.price.current.value,
      color: product.colour.text,
      imageUrl: product.imageUrl,
      additionalImages: product.additionalImageUrls ?? [],
    }));

    return productsData;
  } catch (error) {
    console.error('Error fetching or processing product data:', error);
    return [];
  }
};

export const fetchProductdetails = async (productId: number) => {
  try {
    const response = await axios.get(
      `https://asos10.p.rapidapi.com/api/v1/getProductDetails?productId=${productId}`, 
      {
        headers: {
          'x-rapidapi-host': 'asos10.p.rapidapi.com',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_DATA_API_KEY,
        },
      }
    );

    console.log("API Response:", response.data);

    const product = response.data.data;

    if (!product) {
      console.error("No product data returned");
      return null;
    }

    const productinfo = {
      productId: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      images: product.media.images.map((media: any) => ({
        imageUrl: media.url, 
      })),
    };

    return productinfo;
  } catch (error) {
    console.error('Error fetching or processing product data:', error);
    return null; 
  }
};

