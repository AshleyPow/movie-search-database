import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getMovieFromId } from "../../services/TMDB";
import { img_300, unavailable } from "../../constants/const";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies2 = async () => {
      try {
        // const response = await getMovies();
        // setMovie(response.data);
        // console.log(response.data);
        // setIsLoading(false);
        getMovieFromId(movieId).then((response) => {
          console.log(response);
          setMovie(response);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies2();
  }, [movie.length === 1]);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              className="w-full h-auto"
              src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable}
              alt="Movie Thumbnail"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
            <p className="text-gray-600 mb-4">{movie.overview}</p>
            <div className="flex mb-4">
              <span className="mr-2">Rating:</span>
              <span className="text-yellow-500">{parseFloat(movie.vote_average).toFixed(1)}/10</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Genre:</span>
              <span>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))}
              </span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Release Date:</span>
              <span>{new Date(movie.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Duration:</span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Revenue:</span>
              <span>${(movie.revenue / 1000000).toFixed(0)} million</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">IMDB:</span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_blank">{`https://www.imdb.com/title/${movie.imdb_id}/`}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;
