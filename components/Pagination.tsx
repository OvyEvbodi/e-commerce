'use client'

import ArrowButton from "@/components/ArrowButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { changePage } from "@/redux/cart.slice";
import { useState, useEffect } from "react";
import axios from "axios";

const Pagination = ( ) => {
  const size = useSelector((state: RootState) => state.shop.size);
  const page = useSelector((state: RootState) => state.shop.page);
  const total = useSelector((state: RootState) => state.shop.total);
  const dispatch = useDispatch();

  const handleChangePage = (pageNum: number) => {
    dispatch(changePage(pageNum))

  };

  return (
  <div className="flex gap-6">
    <ArrowButton text="<" type="button" flag="left" />
      
    <ArrowButton text=">" type="button" flag="right" onClick={() => handleChangePage(2)}/>
    <p>{page}</p>
    </div>
  )
};
export default Pagination;
