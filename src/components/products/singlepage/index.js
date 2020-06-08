import React from "react"
import style from "./style.module.css"
import {Link} from "react-router-dom"
import {useRouteMatch} from "react-router-dom"
export const SinglePage =({productStore})=>{
    const match =useRouteMatch()
    const singleProduct = productStore[match.params.index]
    return(
        <>
            <div className={style.singleProductPage}>
                <div className={style.singleProductPage_img}>
                    <img src={singleProduct.img} />
                </div>
                <div>
                    <h1 className={style.singleProductPage_title}>{singleProduct.title}</h1>
                    <p className={style.singleProductPage_company}>{singleProduct.company}</p>
                    <p className={style.singleProductPage_info}>{singleProduct.info}</p>
                    <button className={style.singleProductPage_addbtn}>Add to my cart</button>
                   <Link to="/">
                    <button className={style.singleProductPage_backbtn}>Back to all products</button>
                    </Link>
                </div>
            </div>

        </>
    )
}