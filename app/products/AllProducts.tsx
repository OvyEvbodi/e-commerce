// product listing paage

import { productCardProps } from "@/interfaces/BigCardProps";
import axios from "axios";
import ProductCard from "@/components/productCard";
import Pagination from "@/components/Pagination";
import ProductsPagination from "@/app/products/ProductsPagination";

const size = 30;
const page = 1;
const apikey = "a8e4e1fe190d4cdab5b445261358fbec20240712153100635723";
const appID = "RTUGXRG9D1CCIM5";
const organizationID = "82a6b31709ee4b4f96d04a3dacf37b27";

const productUrl = `https://api.timbu.cloud/products?page=${page}&size=${size}&Appid=${appID}&Apikey=${apikey}&organization_id=${organizationID}`;

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
