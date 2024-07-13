// product details page

const ProductDetails = ( {params} : {params: {prod_id: string} } ) => {
  return (
    <div>{params.prod_id}</div>
  )
}

export default ProductDetails;