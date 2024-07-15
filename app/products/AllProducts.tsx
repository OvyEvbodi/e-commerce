// product listing paage

import axios from "axios";
import ProductsPagination from "@/app/products/ProductsPagination";

const SIZE = process.env.SIZE;
const page = 1;
const APIKEY = process.env.APIKEY;
const APPID = process.env.APPID;
const ORGANIZATIONID = process.env.ORGANIZATIONID;

const productUrl = `https://api.timbu.cloud/products?page=${page}&size=${SIZE}&Appid=${APPID}&Apikey=${APIKEY}&organization_id=${ORGANIZATIONID}`;

const getProducts = async () => {
  try {
    const { data, status } = await axios(productUrl)
    if (status === 200) return data
  } catch (error: any) {
    console.log(error)
  }
};

const AllProducts = async () => {

  const apiResponse = await getProducts();  

  return (
    <div className=" p-4 md:pt-10 min-w-[100vw] lg:min-w-[72%] lg:w-[72%] lg:min-h-[100vh]">
      <h4 className="text-[1.05rem] font-[500]"></h4>
      <ProductsPagination { ...apiResponse } />
    </div>
  )
};

export default AllProducts;
