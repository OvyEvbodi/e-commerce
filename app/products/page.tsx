// product listing page

import Filter from "@/app/products/Filter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AllProducts from "./AllProducts";

export const metadata = { title: 'Products Helendo' };

const ProductsPage = async () => {

  return (
    <main className="flex justify-center items-center">
      <div className="xl:max-w-[1600px]">
        <div className="flex flex-wrap ">
          <div className="p-4 lg:min-w-[28%] lg:w-[28%] lg:min-h-[100vh] lg:pl-16 2xl:pl-28">
            <Filter />
          </div>
          <AllProducts />
          <ToastContainer /> 
        </div>
      </div>
    </main>
  )
};

export default ProductsPage;