import React, {useState,useEffect} from "react"
import { storeProducts } from './../../../data';
import {useHistory ,useRouteMatch} from "react-router-dom"
export const SinglePage =()=>{
    const match =useRouteMatch()
    const [products,setProducts] =useState({storeProducts})
    const singleProduct = products[match.params.id]
    return(
        <>
    
            <h1>Hello from Single Page{match.params.id}</h1>

        </>
    )
}