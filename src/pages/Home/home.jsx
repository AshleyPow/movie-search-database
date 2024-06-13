// import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "../../components/NavBar/navBar";
// import Card from "../../components/Card/card";

// const Home = () => {
//     const movies = [
//         {
//             id: 1,
//             title: "Movie 1",
//             description: "Description of Movie 1",
//             thumbnail: "https://via.placeholder.com/150",
//             releaseDate: "2022-01-01",
//             rating: 7.5,
//         },
//         {
//             id: 2,
//             title: "Movie 2",
//             description: "Description of Movie 2",
//             thumbnail: "https://via.placeholder.com/150",
//             releaseDate: "2022-02-01",
//             rating: 8.2,
//         },
//         {
//             id: 3,
//             title: "Movie 3",
//             description: "Description of Movie 3",
//             thumbnail: "https://via.placeholder.com/150",
//             releaseDate: "2022-03-01",
//             rating: 6.8,
//         },
//         {
//             id: 4,
//             title: "Movie 4",
//             description: "Description of Movie 4",
//             thumbnail: "https://via.placeholder.com/150",
//             releaseDate: "2022-04-01",
//             rating: 7.9,
//         },
//         // Add more movie objects here
//     ];

import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/navBar";
import Card from "../../components/Card/card";
const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      description: "Description of Movie 1",
      thumbnail: "https://via.placeholder.com/150",
      releaseDate: "2022-01-01",
      rating: 7.5,
    },
    {
      id: 2,
      title: "Movie 2",
      description: "Description of Movie 2",
      thumbnail: "https://via.placeholder.com/150",
      releaseDate: "2022-02-01",
      rating: 8.2,
    },
    {
      id: 3,
      title: "Movie 3",
      description: "Description of Movie 3",
      thumbnail: "https://via.placeholder.com/150",
      releaseDate: "2022-03-01",
      rating: 6.8,
    },
    {
      id: 4,
      title: "Movie 4",
      description: "Description of Movie 4",
      thumbnail: "https://via.placeholder.com/150",
      releaseDate: "2022-04-01",
      rating: 7.9,
    },
    // Add more movie objects here
  ];

  return (
    <div className="dark">
      {/* <NavBar /> */}
      <div className="mt-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                description={movie.description}
                thumbnail={movie.thumbnail}
                releaseDate={movie.releaseDate}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Card /> */}
    </div>
  );
};
export default Home;
