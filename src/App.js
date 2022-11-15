import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './pages/homepage';
import Footer from "./components/footer/"
import Login from "./pages/login/"
import Register from "./pages/register/"
import Account from './pages/account/'
import UpdateAccount from './pages/updateAccount/'
import Favorites from './pages/favorites';
import Checkout from './pages/checkout';
import Cart from "./pages/cart/";
import Products from "./pages/products/"
import ProductDescriptionPage from './pages/productDescription';
import PageNotFound from "./pages/pageNotFound/";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/updateaccount" element={<UpdateAccount />} />
          <Route path="/wishlist" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescriptionPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
