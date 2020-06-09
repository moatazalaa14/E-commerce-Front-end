import React ,{useState} from "react"
import style from "./style.module.css"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
export const ProductCard =({product ,popupHandling ,isopen ,popupClosingHandling,addHandling})=>{  
    const [st ,setSt]=useState({
        open:false
    })
    const onOpenModal = () => {
        setSt({ open: true });
      };
     const  onCloseModal = () => {
        setSt({ open: false });
      }; 
      const { open } = st;
    return(
        <>

            <div key={product.id} className={style.productcard}>
               <div>
                    <img src={product.img} alt={product.title}/>
               </div>
               <div className={style.cardinfo}>
                    <p className={style.price}>{product.price}$</p>
                    <p className={style.price}>{product.company}</p>
                </div>
                <button onClick={onOpenModal}>Show me this item</button>
                <Modal open={open} onClose={onCloseModal} center>
                <div className={style.popup}>
                    <div>
                        <img src={product.img} alt={product.title}/>
                </div>
                <div className={style.cardinfo}>
                        <p className={style.price}>{product.price}$</p>
                        <p className={style.price}>{product.company}</p>
                    </div>
                    <div>
                    <Link to={`/products/${product.index}`}>
                        <button className={style.readmore_btn}>Read more about this product</button>
                    </Link>
                    <button className={style.readmore_btn} onClick={()=>addHandling(product)}>Add this product to my cart</button>

                    </div>
                    </div>
                </Modal>
            </div>

        </>
    )
}