// products api
import axios from 'axios'
import { NextResponse } from 'next/server';

export const GET = async () => {
  const productUrl = 'https://api.timbu.cloud/products?page=1&size=10&Appid=RTUGXRG9D1CCIM5&Apikey=a8e4e1fe190d4cdab5b445261358fbec20240712153100635723&organization_id=82a6b31709ee4b4f96d04a3dacf37b27';

    try {
      const { data, status } = await axios.get(productUrl);
      if  (status === 200) {
        return NextResponse.json(data.items)
      }
    } catch (error: any) {
      console.log(error)
    }
    return NextResponse.json({error: "Erroor loading products"})
};
