import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import SmallButton from "@/components/SmallButton";
import { MouseEventHandler } from "react";


export interface CheckoutButtonProps {
  text: string;
  pageUrl: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CheckoutButton: NextPage<CheckoutButtonProps> = ({text, pageUrl, type, onClick }) => {
  return (
    <Link href={pageUrl}>
        <SmallButton text={text} flag="fill" type={type} onClick={onClick} />
    </Link>
  )
};

export default CheckoutButton;