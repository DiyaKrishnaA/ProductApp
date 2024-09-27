import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../App";

function Banner() {
  const { setshowNav } = useContext(productContext);
  const [banner, setbanner] = useState([]);
  const [image, setimage] = useState("");
  setshowNav(true);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const randomProduct = res.data.products;
      const index = Math.floor(Math.random() * randomProduct.length);
      setbanner(randomProduct[index]);
      setimage(randomProduct[index].images[0]);
    });
  }, []);
  console.log(image);
  return (
    <div
      style={{
        backgroundColor: "#60697A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <img src={image && image} alt="" height="850px" />
      <div style={{ marginLeft: "60px" }}>
        <h1>{banner.title}</h1>
      </div>
      <div>
        <p style={{ marginLeft: "50px", marginRight: "100px" }}>
          {banner.description}
        </p>
      </div>
    </div>
  );
}

export default Banner;
