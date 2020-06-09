import React from "react"
import style from "./style.module.css"

export const SingleProductInCart =({product ,removeHandling ,addMoreProduct ,reduceAllProduct})=>{
    return(
        <>
            <div className={style.productcart}>
                        <img src={product.img} className={style.productcart_img}/>
                        <div>
                            <p>Name:{product.title}</p>
                            <p>Company:{product.company}</p>
                        </div>
                        <div>
                            <p>{product.price}$</p>
                        </div>
                        <div>
                            <button onClick={()=>reduceAllProduct(product)}>-</button>
                            <p>{product.count}</p>
                            <button onClick={()=>addMoreProduct(product)}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>removeHandling(product)}>Delete</button>
                        </div>
                    </div>
        </>
    )
}