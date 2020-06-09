import React, { useState } from "react";
import { AllProducts } from "./components/products/Allproduct";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SinglePage } from "./components/products/singlepage/index";
import { MyCart } from "./components/mycart/index";
import { storeProducts } from "./data";
import { Navbar } from "./Shared/layout/navbar/Navbar";
import { Footer } from "./Shared/layout/footer/Footer";
function App() {
  const [products, setProducts] = useState(storeProducts);
  const addHandling = (singleProduct) => {
   const newProducts= products.map((product) => {
      if (singleProduct.id === product.id && singleProduct.inCart == false) {
        return {
          ...product,
          inCart: !product.inCart,
        }
      }
      return product;
    });
    setProducts(newProducts)
  };
  const removeHandling = (singleProduct) => {
    const newProducts= products.map((product) => {
       if (singleProduct.id === product.id && singleProduct.inCart == true) {
         return {
           ...product,
           inCart: !product.inCart,
         }
       }
       return product;
     });
     setProducts(newProducts)
   };
   const addMoreProduct=(singleProduct )=>{
     const newProducts= products.map((product) => {
       if (singleProduct.id === product.id ) {
        console.log(singleProduct.count+=1)
        return {
          ...product,
          count: singleProduct.count++,
        }
      }
      return product;
    });
    setProducts(newProducts)
   }
   const reduceAllProduct=(singleProduct )=>{
     const newProducts= products.map((product) => {
       if (singleProduct.id === product.id && singleProduct.count > 0 ) {
        return {
          ...product,
          count: product.count-=1,
        }
      }
      return product;
    });
    setProducts(newProducts)
   }
 
  return (
    <div>
      <Router>
      <Navbar />
        <Route
          exact
          path="/"
          render={() => <AllProducts productStore={products} addHandling={addHandling} />}
        />
        <Route
          exact
          path="/products/:index"
          render={() =><SinglePage productStore={products} addHandling={addHandling} />}
         />
        <Route
          exact
          path="/mycart"
          render={() => <MyCart productStore={products} removeHandling={removeHandling} addMoreProduct={addMoreProduct} reduceAllProduct={reduceAllProduct} />}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
