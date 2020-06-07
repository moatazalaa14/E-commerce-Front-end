import React ,{useState}  from 'react';
import { Navbar } from './components/layout/navbar/Navbar';
import { Footer } from './components/layout/footer/Footer';
import { AllProducts } from './components/products/Allproduct';
import {BrowserRouter as Router ,Route} from "react-router-dom"
import { SinglePage } from './components/products/singlepage/index';
import { MyCart } from './components/mycart/index';
import { storeProducts } from './data';
function App() {
  const [products,setProducts]=useState(storeProducts)
  
  return (
    <div>
      <Navbar />
        <Router>
        <Route exact path="/" render={() => <AllProducts productStore={products} />} />
          <Route exact path="/products/:id" component={SinglePage} />
          <Route exact path="/mycart" render={() => <MyCart productStore={products} />} />

        </Router>
      <Footer />

    </div>
  );
}

export default App;
