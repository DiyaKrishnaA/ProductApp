import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Carts() {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((res) => setcart(res.data.carts));
  }, []);
  console.log(cart);
  return (
    <div className="row" style={{ backgroundColor: "#60697A" }}>
      {cart.map((item, index) => {
        return (
          <Card
            style={{
              width: "18rem",
              margin: "12px",
              backgroundColor: "#1F2833",
              color: "white",
            }}
            key={index}
          >
            <Card.Body>
              {item.products.map((i, ind) => {
                return (
                  <div key={ind}>
                    <Card.Subtitle className="mb-2 ">{i.id}</Card.Subtitle>
                    <Card.Title>{i.title}</Card.Title>
                    <img src={i.thumbnail} height="200px" alt="" />
                    <Card.Text>Price{i.price}</Card.Text>
                    <Card.Text> Quantity: {i.quantity}</Card.Text>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Carts;
