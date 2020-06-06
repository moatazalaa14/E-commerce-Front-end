import React  from "react"
import style from "./style.module.css"
export const ProductCard =({product ,popupHandling ,isopen ,popupClosingHandling})=>{   
    return(
        <>
              {isopen.opened ? <section className={style.popup}>
                <div className={style.popup_image}>
                  <button onClick={popupClosingHandling}>X</button>
                    <img src={product.img} />
                    <p className={style.popup_image_title}>{product.title}</p>
                    <button className={style.popup_image_btn}>Add this product to my cart</button>
                    <button className={style.popup_image_btn}>Read more about this product</button>
                </div>

              </section>:null}

            <div key={product.id} className={style.productcard}>
               <div>
                    <img src={product.img} />
               </div>
               <div className={style.cardinfo}>
                    <p className={style.price}>{product.price}$</p>
                    <p className={style.price}>{product.company}</p>
                    <button className={style.showbtn} onClick={popupHandling}>Show me this product</button>
                </div>
            </div>

        </>
    )
}