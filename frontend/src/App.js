import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">amazona</Link>
                </div>
                <div>
                    <Link to="/cart">Cart</Link>
                    <Link to="/signin">Sign in</Link>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/product/:slug" element={ <ProductScreen/> }></Route>
                    <Route path="/" element={ <HomeScreen/> }></Route>
                </Routes>
            </main>

            <footer className="row center">
                All rights reserved.
            </footer>
        </div>
    </BrowserRouter>    
  );
}

export default App;
