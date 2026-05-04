import TopBar from "./components/topbar";
import Carousel from "./components/carousel";
import Category from "./components/categories";
import Offers from "./components/offers";
import Products from "./components/products";
import BestSale from "./components/bestSales";
import Feature from "./components/features";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <TopBar />
            <Carousel />
            <Category />
            <Offers />
            <Products />
            <BestSale />
            <Feature />
            <Footer />
          </>
        }
      />

  
      <Route path="/pages/admin" element={<Admin />} />

    </Routes>
  );
}

export default App;