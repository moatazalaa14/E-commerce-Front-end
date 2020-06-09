import React from "react"
import style from "./style.module.css"

export const SingleProductInCart =({product ,removeHandling ,addMoreProduct ,reduceAllProduct})=>{
    return(
        <>
            <div className={style.productcart}>
                        <img src={product.img} className={style.productcart_img} alt={product.title}/>
                        <div>
                            <p>Name:{product.title}</p>
                            <p>Company:{product.company}</p>
                        </div>
                        <div>
                            <p>{product.price}$</p>
                        </div>
                        <div>
                            <button onClick={()=>reduceAllProduct(product)} className={style.productcart_abs}>-</button>
                            <p className={style.productcart_count}>{product.count}</p>
                            <button onClick={()=>addMoreProduct(product)} className={style.productcart_sum}>+</button>
                        </div>
                        <div>
                            <button className={style.productcart_del} onClick={()=>removeHandling(product)}>Delete</button>
                        </div>
                        <div className={style.productcart_total}> 
                            <p >Total price : {(product.count)*(product.price)}</p>
                        </div>
                    </div>
        </>
    )
}