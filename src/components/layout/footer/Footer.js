import React from "react"
import style from "./Footer.module.css"
export const Footer =()=>{
    return(
        <footer className={style.footer}>
            <div className={style.footer__rights}>
                <p className={style.footer__rights_para}>All rights reserved</p>
            </div>
            <div className={style.footer__follow}>
                <form>
                    <input type="email" placeholder="Your Email ..."/>
                    <button>Send</button>
                </form>
            </div>


        </footer>
    )
}