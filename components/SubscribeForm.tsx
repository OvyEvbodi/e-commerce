import React from 'react'

const SubscribeForm = () => {
  return (
    <form>
      <input required={true} className="py-3 text-[0.8rem] bg-grey-bg  pl-4 rounded-[6px]" type="text" placeholder="your email" />
      <button className=" py-2 px-6 text-sm hover:text-green rounded-[6px] border-4 border-green hover:bg-white bg-green text-white transition-all duration-300">
        Subscribe
      </button>
    </form>
  )
};

export default SubscribeForm;