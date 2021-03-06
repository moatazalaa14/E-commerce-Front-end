import React, { useState } from "react";
import style from "./style.module.css";
import { ProductCard } from "./../productcard/index";
export const AllProducts = ({productStore ,addHandling}) => {
  const [isOpen, setIsOpen] = useState({
    opened: false,
  });
  const popupHandling =()=>{
    if (isOpen.opened === false){ 
    setIsOpen({
          opened:!isOpen.opened
      })}
  }
  const popupClosingHandling =()=>{
    setIsOpen({
        opened:!isOpen.opened
    })
  }
  return (
    <>
      <h1 className={style.products_heading}>All Products</h1>
      <section className={style.products}>
        {productStore.map((product) => {
          return <ProductCard product={product} popupHandling={popupHandling} isopen={isOpen} popupClosingHandling={popupClosingHandling} addHandling={addHandling} key={product.index}/>;
        })}
      </section>
    </>
  );
};
