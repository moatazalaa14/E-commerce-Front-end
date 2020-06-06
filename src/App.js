import React  from 'react';
import { Navbar } from './components/layout/navbar/Navbar';
import { Footer } from './components/layout/footer/Footer';
import { AllProducts } from './components/products/Allproduct';
function App() {
  return (
    <div>
      <Navbar />
        <AllProducts />
      <Footer />

    </div>
  );
}

export default App;
