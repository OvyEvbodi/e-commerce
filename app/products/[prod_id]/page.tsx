// product details page
import { productCardProps } from "@/interfaces/BigCardProps";
import axios from "axios";
import ProdDescription from "@/app/products/ProdDescription";
import ProdSummary, { ProductSummaryProps } from "@/app/products/ProdSummary";
import ProdGallery from "@/app/products/ProdImgGallery";
import { ToastContainer } from 'react-toastify';
import Link from "next/link";


const ProductDetails = async ( {params} : {params: {prod_id: string} } ) => {
  const apikey = "a8e4e1fe190d4cdab5b445261358fbec20240712153100635723";
  const appID = "RTUGXRG9D1CCIM5";
  const organizationID = "82a6b31709ee4b4f96d04a3dacf37b27";

  const productUrl = `https://api.timbu.cloud/products/${params.prod_id}?Appid=${appID}&Apikey=${apikey}&organization_id=${organizationID}`;

  const getProduct = async () => {
    try {
      const { data, status } = await axios(productUrl)
      if (status === 200) return data
    } catch (error: any) {
      console.log(error)
    }
  };

  const apiResponse = await getProduct();
  console.log( apiResponse )

  const summaryData: ProductSummaryProps = apiResponse && {
    id: apiResponse.id,
    title: apiResponse.name,
    description: apiResponse.description,
    category: apiResponse.category,
    price: apiResponse.current_price,
    discount: apiResponse.discounted_price,
    inStock: apiResponse.is_available,
    rating: apiResponse.rating,
    quantity: apiResponse.available_quantity,
    code: apiResponse.unique_id,
    image: apiResponse.photos
  }


  return (
    <section className="flex flex-col items-center justify-center" >
      <div className="p-6 lg:px-12 text-orange font-normal text-[1.05rem]">
        <span>&larr; </span>
        <Link href="/products" className=" hover:opacity-80">Back to products</Link> 
      </div>
      <div className="flex flex-col gap-8 p-6 lg:p-12 lg:max-w-[90vw] ">
        <div className="flex flex-wrap gap-4 justify-center">
          <ProdGallery />
          <ProdSummary { ...summaryData }/>
        </div>
        <ProdDescription />
      </div>
      {/* <p>{JSON.stringify(apiResponse)}</p> */}
      <ToastContainer />
    </section>
  )
}

export default ProductDetails;

{/* <div>{params.prod_id}</div>
      {/* <p>{JSON.stringify(apiResponse)}</p> */}
      // <h2>{apiResponse && apiResponse.name}</h2>
      // <p>{apiResponse && apiResponse.description}</p> */}