import React  from "react"
import style from "./style.module.css"
import {Popup} from "./../Allproduct/popup/popup"
export const ProductCard =({product ,popupHandling ,isopen ,popupClosingHandling})=>{   
    return(
        <>
             {isopen.opened? <Popup product={product} isopen={isopen} popupClosingHandling={popupClosingHandling}/>:null}

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