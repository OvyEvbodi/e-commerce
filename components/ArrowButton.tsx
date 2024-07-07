// arrow buttons
import { NextPage } from "next";
import ButtonProps from "@/interfaces/ButtonProps";

const ArrowButton: NextPage<ButtonProps> = ({ type, text, onClick, disabled, flag }) => {
  return (
    <button 
      className={ flag == "left" ? "left_btn" : "right_btn" }
      onClick={ onClick } type={ type } disabled={ disabled }>
      {text}
    </button>
  )
};

export default ArrowButton;