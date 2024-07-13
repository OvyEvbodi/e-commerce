// single product Summary 

import SmallButton from "@/components/SmallButton";

const ProdSummary = () => {
  return (
    <div className="min-w-[250px] min-h-[300px] lg:min-w-[400px] flex flex-col gap-6">
      <div className="bg-grey-bg flex flex-col items-start justify-center p-1 px-2">
        <p>save</p>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        <p>name</p>
        <p>short des</p>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        <div className="flex items-start gap-4">
          <p>$price</p>
          <p>$discount</p>
        </div>
        <div  className="flex items-start gap-4">
          <p>code</p>
          <p>availability</p>
        </div>
        <div  className="flex items-start gap-4">
          <p>rating</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        {/* <div>quantity</div> */}
      </div>
      <div className="flex items-start justify-center gap-4 p-1 px-2">
        <SmallButton text="Add to cart" flag="fill" />
        <SmallButton text="Buy now" />
        <div>love</div>
      </div>
    </div>
  )
};

export default ProdSummary;