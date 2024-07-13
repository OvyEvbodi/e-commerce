// product details page
import { productCardProps } from "@/interfaces/BigCardProps";
import axios from "axios";
import ProdDescription from "@/app/products/ProdDescription";
import ProdSummary from "@/app/products/ProdSummary";
import ProdGallery from "@/app/products/ProdImgGallery";

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

  return (
    <section className="flex items-center justify-center" >
      <div className="flex flex-col gap-8 p-6 lg:p-12 lg:max-w-[90vw] ">
        <div className="flex flex-wrap gap-4 justify-center">
          <ProdGallery />
          <ProdSummary />
        </div>
        <ProdDescription />
      </div>
      
    </section>
  )
}

export default ProductDetails;

{/* <div>{params.prod_id}</div>
      {/* <p>{JSON.stringify(apiResponse)}</p> */}
      // <h2>{apiResponse && apiResponse.name}</h2>
      // <p>{apiResponse && apiResponse.description}</p> */}