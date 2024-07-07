// button component 
import { NextPage } from "next";
import ButtonProps from "@/interfaces/ButtonProps";

const SmallButton: NextPage<ButtonProps> = ({ type, text, onClick, disabled , flag}) => {
    return(
    <button onClick={ onClick } type={ type } disabled={ disabled } 
    className={
        flag == "fill" ? "my-1 py-1 px-10 text-sm hover:text-green rounded-[6px] border border-green hover:bg-white bg-green text-white transition-all duration-300 " : "my-1 py-1 px-10 text-sm hover:text-white rounded-[6px] border border-green hover:bg-green bg-white text-green transition-all duration-300"
    }
    >{ text }</button>
    )
};

export default SmallButton;