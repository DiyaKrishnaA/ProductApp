import React, { useContext } from "react";
import { productContext } from "../App";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function DetailPage() {
  const { newProduct, productid, setshowBanner, setshowNav } =
    useContext(productContext);
  setshowBanner(false);
  setshowNav(false);
  console.log(newProduct);
  console.log(productid);

  const filterById = (productid) => {
    return newProduct.filter((product) => product.id === productid);
  };

  const filteredId = filterById(productid);

  return (
    <div>
      {filteredId.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              // border: "1px solid black",
              // backgroundColor: "#60697A",
              // color: "white",
              margin: "10px 10px",
              // padding: "60px 0",
            }}
          >
            <div>
              <img src={item.images[0]} alt="" height="500px" />
            </div>
            <div style={{ marginRight: "200px", marginLeft: "70px" }}>
              <h1>{item.title}</h1>
              <h3>Product ID: {productid}</h3>
              <br />
              <h3>${item.price}</h3>
              <br />
              <p style={{ fontSize: "20px" }}>{item.description}</p>
              <h3>Availability: {item.availabilityStatus}</h3>
              <h3>Brand: {item.brand}</h3>
              <h3>Return Policy: {item.returnPolicy}</h3>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPage;
