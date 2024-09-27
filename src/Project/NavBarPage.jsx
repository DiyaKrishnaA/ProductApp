import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { productContext } from "../App";

function NavBarPage() {
  const { setsearch } = useContext(productContext);
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#313C52" }}>
      <Container style={{ marginLeft: "50px" }}>
        <Navbar.Brand style={{ color: "white", fontSize: "35px" }}>
          Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            {/* <Link
              to="/comedy"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "24px",
                color: "white",
              }}
            >
              Comedy
            </Link>
            <Link
              to="/latest"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Latest
            </Link>
            <Link
              to="/popular"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Popular
            </Link> */}
            <input
              type="search"
              placeholder="search product..."
              style={{
                marginRight: "200px",
                height: "50px",
                padding: "10px",
              }}
              onChange={handleSearch}
            />

            <Link
              to="/product"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Product
            </Link>

            <Link
              to="/recipes"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Recipes
            </Link>

            <Link
              to="/carts"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Carts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPage;
