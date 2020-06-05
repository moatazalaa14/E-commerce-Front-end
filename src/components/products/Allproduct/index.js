import React  from "react"
import { storeProducts } from './../../../data';
import style from "style.module.css"
export const AllProducts=()=>{
   
    return(
        <section className={style.products} >
            {
                storeProducts.map(product=>{
                    return(
                        <div key={product.id}>
                            <img src={product.img} />
                            <p>{product.price}</p>
                            <p>{product.company}</p>
                        </div>
                    )
                })
            }


        </section>
    )
}