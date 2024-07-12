// product listing page

// import { product_cards } from "@/api/data.json";
import ProductCard from "@/components/productCard";
import Filter from "@/app/products/Filter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BigCardProps from "@/interfaces/BigCardProps";
import { GET } from "@/app/products/api/route";

export const metadata = { title: 'Products Helendo' };


const ProductsPage = async () => {
  const productList = await GET();
  console.log( productList )

  return (
    <main className="flex justify-center items-center">
      <div className="xl:max-w-[1600px]">
        <div className="flex flex-wrap ">
          <div className="p-4 lg:min-w-[28%] lg:w-[28%] lg:min-h-[100vh] lg:pl-16 2xl:pl-28">
            <Filter />
          </div>
          <div className="p-4 md:pt-10 min-w-[100vw] lg:min-w-[72%] lg:w-[72%] lg:min-h-[100vh]">
            <h4 className="text-[1.05rem] font-[500]"></h4>
            <p>{JSON.stringify(productList)}</p>
            {/* <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
              {
                productList.map((item: BigCardProps ) => (
                  <div key={item.id}>
                    <ProductCard { ...item } />
                  </div>
                ))
              }
            </div> */}
          </div>
          <ToastContainer />
        </div>
      </div>
    </main>
  )
};

export default ProductsPage;

