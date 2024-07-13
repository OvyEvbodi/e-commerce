// product details page
import { productCardProps } from "@/interfaces/BigCardProps";
import axios from "axios";

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
    <section>
      <div>{params.prod_id}</div>
      {/* <p>{JSON.stringify(apiResponse)}</p> */}
      <h2>{apiResponse && apiResponse.name}</h2>
      <p>{apiResponse && apiResponse.description}</p>
    </section>
  )
}

export default ProductDetails;