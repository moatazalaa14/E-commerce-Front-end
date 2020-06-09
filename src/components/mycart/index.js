import React from "react"
import style from "./style.module.css"
import { SingleProductInCart } from './singleproduct/index';
export const MyCart =({productStore ,removeHandling ,addMoreProduct ,reduceAllProduct})=>{
  
    return(
        <>
    {
        productStore.map(product=>{
            if(product.inCart){
                return(
                    <SingleProductInCart product={product} removeHandling={removeHandling} addMoreProduct={addMoreProduct} reduceAllProduct={reduceAllProduct} key={product.index}/>
                )
            }
        })
    }

        </>
    )
}