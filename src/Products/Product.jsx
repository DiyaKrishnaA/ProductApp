import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productContext } from "../App";

function Product() {
  const {
    newProduct,
    setnewProduct,
    productid,
    setproductid,
    showBanner,
    setshowBanner,
    search,
    setsearch,
  } = useContext(productContext);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setnewProduct(res.data.products));

    setshowBanner(true);
  }, []);

  const getProductId = (id) => {
    setproductid(id);
    console.log(id);
  };
  const filteredProduct = newProduct.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row" style={{ backgroundColor: "#60697A" }}>
      {filteredProduct?.map((item, index) => {
        // console.log(index);
        return (
          <Card
            style={{
              width: "18rem",
              margin: "12px",
              backgroundColor: "#1F2833",
              color: "white",
            }}
            key={index}
            onClick={() => getProductId(item.id)}
          >
            <Link
              to="/detail"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <img src={item.images[0]} height="180px" alt="" />
                <Card.Text> Price: {item.price}</Card.Text>
                <Card.Text>Rating: {item.rating}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default Product;
