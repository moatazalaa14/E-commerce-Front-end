import React ,{useState} from "react"
import { storeProducts } from './../../data';
import style from "./style.module.css"
export const MyCart =({productStore})=>{
    const [products , setProducts] =useState(storeProducts)
    console.log(productStore)
    return(
        <>
    {
        productStore.map(product=>{
            if(product.inCart){
                return(
                    <div>
                        <img src={product.img} />
                        <p>{product.title}</p>
                    </div>
                )
            }
        })
    }

        </>
    )
}