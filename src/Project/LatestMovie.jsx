import axios from "axios";
import React, { useEffect, useState } from "react";
import { Animation_movies, latestMovies } from "../url";
import { Card } from "react-bootstrap";

function LatestMovie() {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(Animation_movies).then((res) => setmovies(res.data.results));
  }, []);
  console.log(movies);
  return (
    <div className="row">
      {movies.map((item) => {
        return (
          <Card
            style={{
              width: "18rem",
              margin: "12px",
              backgroundColor: "#1F2833",
              color: "white",
            }}
          >
            <Card.Body>
              <Card.Title>{item.original_title}</Card.Title>
              <Card.Subtitle className="mb-2 ">{item.id}</Card.Subtitle>
              <img src={item.poster_path} height="200px" alt="" />
              <Card.Text> Popularity: {item.popularity}</Card.Text>
              <Card.Text>Release Date: {item.release_date}</Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default LatestMovie;
