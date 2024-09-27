import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Recipes() {
  const [recipe, setrecipe] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setrecipe(res.data.recipes));
  }, []);
  console.log(recipe);

  return (
    <div className="row" style={{ backgroundColor: "#60697A" }}>
      {recipe.map((item, index) => {
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
              <Card.Subtitle className="mb-2 ">{item.id}</Card.Subtitle>
              <Card.Title>{item.name}</Card.Title>
              <img src={item.image} height="200px" alt="" />
              <Card.Text>Cuisine: {item.cuisine}</Card.Text>
              {/* <Card.Text> Instructions: {item.instructions}</Card.Text> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Recipes;
