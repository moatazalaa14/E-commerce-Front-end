import React from "react"
import style from "./style.module.css"
export const ProductCard =({product})=>{
    return(
        <>
            <div key={product.id} className={style.productcard}>
               <div>
                    <img src={product.img} />
               </div>
               <div className={style.cardinfo}>
                    <p className={style.price}>{product.price}$</p>
                    <p className={style.price}>{product.company}</p>
                    <button className={style.showbtn}>Show me this product</button>
                </div>
            </div>

        </>
    )
}