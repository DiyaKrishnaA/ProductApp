import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarPage from "./Project/NavBarPage";
// import ComedyMovie from "./Project/ComedyMovie";
// import LatestMovie from "./Project/LatestMovie";
// import PopularMovie from "./Project/PopularMovie";
import Product from "./Products/Product";
import Recipes from "./Products/Recipes";
import Carts from "./Products/Carts";
import Banner from "./Project/Banner";
import DetailPage from "./Project/DetailPage";

const productContext = createContext();

function App() {
  const [showBanner, setshowBanner] = useState(true);
  const [showNav, setshowNav] = useState(true);
  const [newProduct, setnewProduct] = useState([]);
  const [newRecipes, setnewRecipes] = useState([]);
  const [productid, setproductid] = useState("");
  const [search, setsearch] = useState("");
  return (
    <div>
      <productContext.Provider
        value={{
          newProduct,
          setnewProduct,
          showNav,
          setshowNav,
          productid,
          setproductid,
          showBanner,
          setshowBanner,
          newRecipes,
          setnewRecipes,
          search,
          setsearch,
        }}
      >
        <BrowserRouter>
          {showNav === true ? <NavBarPage /> : ""}
          {showBanner === true ? <Banner /> : ""}

          <Routes>
            {/* <Route path="/comedy" element={<ComedyMovie />}></Route>
          <Route path="/latest" element={<LatestMovie />}></Route>
          <Route path="/popular" element={<PopularMovie />}></Route> */}

            <Route path="/product" element={<Product />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/carts" element={<Carts />}></Route>
            <Route path="/detail" element={<DetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </div>
  );
}

export default App;
export { productContext };
