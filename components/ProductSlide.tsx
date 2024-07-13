// Categories
import { cart_page_cards } from "@/api/data.json";
import ArrowButton from "@/components/ArrowButton";
import ProductCard from "@/components/productCard";
import { productCardProps } from "@/interfaces/BigCardProps";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

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


const ProductSlide = async() => {
  const apiResponse = await getProducts();
  const productList = apiResponse && apiResponse.items.map((item: any) => {
    return {
      title: item.name,
      price: item.current_price[0].NGN[0],
      description: item.description,
      category: item.category,
      quantity: item.available_quantity,
      image: item.photos,
      label: item.name,
      id: item.id
    }
  })

  return (
    <div id="product_slide" className="p-4 lg:p-12 lg:min-h-[64vh] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 ">
        <h3 className="font-bold text-[1.5rem]">Discover Other Products</h3>
        {/* <div className="flex gap-4">
          <ArrowButton text="&#8606;" flag="left"/>
          <ArrowButton text="&#8608;" flag="right"/>
        </div> */}
      </div>
      <div className="flex-wrap md:flex-nowrap md:overflow-x-scroll flex gap-4 items-stretch justify-evenly min-h-[300px]">
        {
          productList.map((item: productCardProps) => (
            <div key={item.id}>
              <ProductCard { ...item }/>
            </div>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductSlide;