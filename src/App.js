import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './pages/homepage';
import Footer from "./components/footer/"
import Login from "./pages/login/"
import Register from "./pages/register/"



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
