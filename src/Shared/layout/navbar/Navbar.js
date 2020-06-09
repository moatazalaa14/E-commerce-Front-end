import React from "react"
import logo from "../../../logo.svg"
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom';
export const Navbar=()=>{
    return(
        <nav className={style.navbar}>
            <div className={style.navbar__logo}>
                <img src={logo} alt="ecommerce logo" className={style.navbar__logo_image}/>
                <Link to="/">
                <h1 className={style.navbar__logo_heading}>E-commerce product</h1>
                </Link>
            </div>
            <div className={style.navbar__mycart}>
                <Link to="/mycart">
                    <button className={style.navbar__mycart_btn}>MyCart</button>
                </Link>
            </div>

        </nav>
    )
}