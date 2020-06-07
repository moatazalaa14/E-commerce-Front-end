import React from "react"
import style from "./style.module.css"
import {Link} from "react-router-dom"


export const Popup =({product , popupClosingHandling})=>{
  
    return(
        <>
           <section className={style.popup}>
                <div className={style.popup_image}>
                  <button onClick={popupClosingHandling}>X</button>
                    <img src={product.img} />
                    <p className={style.popup_image_title}>{product.title}</p>
                    <button className={style.popup_image_btn} onClick={productHandling}>Add this product to my cart</button>
                    <Link to={`/products/${product.id}`}>
                    <button className={style.popup_image_btn} onClick={productHandling}>Read more about this product</button>
                    </Link>
                </div>

              </section>

        </>
    )
}