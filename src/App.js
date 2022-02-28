import Home from "./pages/Home"
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const App = () => {
  
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //   </Routes>
  // </BrowserRouter>
    return <div> <Home /> ,<Cart />,<Product/>,<Login/>,<Register/> </div>;

  };

export default App;