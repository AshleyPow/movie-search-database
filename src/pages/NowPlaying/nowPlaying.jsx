import React from "react";
import Card from "../../components/Card/card";
import { useState, useEffect } from "react";
import { getNowPlayingMovies } from "../../services/TMDB";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";
import "../../App.css";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMovies2 = async () => {
      try {
        // const response = await getMovies();
        // setMovies(response.data);
        // console.log(response.data);
        // setIsLoading(false);
        getNowPlayingMovies().then((response) => {
          console.log(response);
          setMovies(response);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies2();
  }, [movies.length === 1]);

  return (
    <div className="dark">
      {isLoading && <div>Loading...</div>}
      <NavBar />
      {!isLoading && (
        <div className="mt-2">
          <div>
            <h1 className="text-4xl text-center font-bold mt-10">
              Now Playing
            </h1>
          </div>
          <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((Val) => {
                const {
                  title,
                  poster_path,
                  overview,
                  release_date,
                  vote_average,
                  id,
                } = Val;
                return (
                  <Card
                    id={id}
                    title={title}
                    description={overview}
                    thumbnail={poster_path}
                    releaseDate={release_date}
                    rating={vote_average}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};
export default NowPlaying;
