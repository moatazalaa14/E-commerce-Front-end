import React  from "react"
import { storeProducts } from './../../../data';
import style from "./style.module.css"
import { ProductCard } from './../productcard/index';
export const AllProducts=()=>{
   
    return(
        <>
        <h1 className={style.products_heading}>All Products</h1>
        <section className={style.products} >
            {
                storeProducts.map(product=>{
                    return(


                        <ProductCard product={product} />
                        
                    )
                })
            }


        </section>
        </>
    )
}