import axios from "axios";



const getAllProducts = async (page:number = 1, size: number = 10) => {
  const apikey = "a8e4e1fe190d4cdab5b445261358fbec20240712153100635723";
  const appID = "RTUGXRG9D1CCIM5";
  const organizationID = "82a6b31709ee4b4f96d04a3dacf37b27";
  const productUrl = `https://api.timbu.cloud/products?page=${page}&size=${size}&Appid=${appID}&Apikey=${apikey}&organization_id=${organizationID}`;

  const { data, status } = await axios(productUrl)
  return data
};
export const fetchProds = () => {
  return getAllProducts(1, 3);
};
