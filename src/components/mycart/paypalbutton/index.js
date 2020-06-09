import React ,{useState,useEffect} from "react"
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
export const PaypalBtn=()=>{
    const [showBtn,setShowBtn]=useState(false)
    window.React = React;
    window.ReactDOM = ReactDOM;
    useEffect(()=>{
        const {
            isScriptLoaded,
            isScriptLoadSucceed
          } = this.props;
       
          if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });
          }
    })
    return(
        <>



        </>
    )
}
export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalBtn);
