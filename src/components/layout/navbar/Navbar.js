import React from "react"
import logo from "../../../logo.svg"
import style from "./Navbar.module.css"
export const Navbar=()=>{
    return(
        <nav className={style.navbar}>
            <div className={style.navbar__logo}>
                <img src={logo} alt="ecommerce logo" className={style.navbar__logo_image}/>
                <h1 className={style.navbar__logo_heading}>E-commerce product</h1>
            </div>
            <div className={style.navbar__mycart}>
                <button className={style.navbar__mycart_btn}>MyCart</button>
            </div>

        </nav>
    )
}