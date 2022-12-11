import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "./utils/scroll.jsx"
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

  const [cartItem, setCartItem] = useState([])
  const [favoriteItem, setFavoriteItem] = useState([])

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist) {
      setCartItem(
        cartItem.map((item) => (
          item.id === product.id ? 
          
          { 
            ...productExist, 
            qty: productExist.qty + 1,
            qtyPrice: productExist.qty * productExist.price,
          } 
        : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1, qtyPrice: product.price }])
    }
  }

  const removeFromCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist.qty >= 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
  }

  const removeAllProductsFromCart = () => {
    setCartItem([])
  }

  const increaseProductQuantity = (product, stock) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if ( (productExist.qty >= 1) & (productExist.qty <= stock-1) ) {
      setCartItem(
        cartItem.map((item) => (
          item.id === product.id ? 
          { 
            ...productExist, 
            qty: productExist.qty + 1,
            qtyPrice: item.price * (item.qty + 1)
          } : item)))
    }
  }

  const decreaseProductQuantity = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1, qtyPrice: item.price * (item.qty -1) } : item)))
    }
  }

  const addToWishlist = (product) => {
    const productExist = favoriteItem.find((item) => item.id === product.id)
    if (productExist) {
      setFavoriteItem(favoriteItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {
      setFavoriteItem([...favoriteItem, { ...product, qty: 1 }])
    }
  }

  const removeFromFavorites = (product) => {
    const productExist = favoriteItem.find((item) => item.id === product.id)
    if (productExist.qty >= 1) {
      setFavoriteItem(favoriteItem.filter((item) => item.id !== product.id))
    }
  }

  const removeAllProductsFromFavorites = () => {
    setFavoriteItem([])
  }


  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price, 0
  )


  return (
    <div>
      <Router>
        <Navbar 
          cartItem={cartItem} 
          favoriteItem={favoriteItem} 
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/updateaccount" element={<UpdateAccount />} />
          <Route path="/wishlist" 
            element={<Favorites 
              favoriteItem={favoriteItem}
              addToCart={addToCart}
              removeFromFavorites={removeFromFavorites}
              removeAllProductsFromFavorites={removeAllProductsFromFavorites}
            />} 
          />

          <Route path="/checkout" 
            element={<Checkout 
            cartItem={cartItem} 
            totalPrice={totalPrice}
            />} 
          />

          <Route path="/cart" 
            element={<Cart 
              cartItem={cartItem} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
              removeAllProductsFromCart={removeAllProductsFromCart} 
              increaseProductQuantity={increaseProductQuantity}
              decreaseProductQuantity={decreaseProductQuantity}
              totalPrice={totalPrice}
            />} 
          />
          <Route path="/products" 
            element={<Products 
              cartItem={cartItem} 
              favoriteItem={favoriteItem}
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              addToWishlist={addToWishlist}
              removeFromFavorites={removeFromFavorites}
              increaseProductQuantity={increaseProductQuantity}
              decreaseProductQuantity={decreaseProductQuantity}
              
            />} 
          />
          <Route path="/products/:id" element={<ProductDescriptionPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
