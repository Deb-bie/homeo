import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
// import Navbar from "./components/navbar/navbar.jsx"
import Container from "./components/navbar/mynavbar/container"
import Homepage from './pages/homepage';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Container /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
