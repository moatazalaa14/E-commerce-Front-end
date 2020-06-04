import React from "react"
import style from "./Footer.module.css"
export const Footer =()=>{
    return(
        <footer className={style.footer}>
            <div className={style.footer__rights}>
                <p>All rights reserved</p>
            </div>
            <div className={style.footer__follow}>
                <form>
                    <input type="email" />
                    <button>Send</button>
                </form>
            </div>


        </footer>
    )
}