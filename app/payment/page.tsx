// payment page... Last minute stuff, fix later!!!
import Link from "next/link";


const PaymentPage = () => {
  return (
    <main className="min-h-[50vh] font-bold text-[2rem] text-center p-8">
      <h1>Thank you for shopping with us!</h1>
      <Link href="/products" className="text-orange underline cursor-pointer ">Back to store...</Link>
    </main>
  )
};

export default PaymentPage;