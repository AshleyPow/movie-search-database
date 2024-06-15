import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import { getPopularMovies } from "../../services/TMDB";
import Typewriter from 'typewriter-effect';
import './home.css'
import { motion } from "framer-motion";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies2 = async () => {
      try {
        getPopularMovies().then((response) => {
          console.log(response);
          setMovies(response);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies2();
  }, []);

  return (
    <div className="dark">
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="mt-2">
          <motion.div 
          initial={{y:-200}}
          animate={{ y: 0, opacity: 1, }}
          whileHover={{scale:1.2}}
          
           className="header-container">
            <h1 className="overlay-text">
              Home
              <br></br>
              {/* Audience&nbsp; */}
              {/* <Typewriter
                options={{
                  strings: ''
                  // ['AUDIENCE', 'BUZZER', 'BINGERS']
                  ,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              /> */}
            </h1>
          </motion.div>
          
          <motion.div
          initial={{y:-200}}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{y:0}} className="container mx-auto mt-20">
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
                    key={id}
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
