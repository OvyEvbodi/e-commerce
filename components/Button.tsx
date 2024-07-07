// button component 
import { NextPage } from "next";
import ButtonProps from "@/interfaces/ButtonProps";

const Button: NextPage<ButtonProps> = ({ type, text, onClick, disabled }) => {
    return(
    <button onClick={ onClick } type={ type } disabled={ disabled }
    className='py-2 px-12 lg:w-[220px] text-sm text-white rounded-[6px] border border-green bg-green text-white hover:bg-white hover:text-green transition-all duration-300'>{ text }</button>
    )
};

export default Button;