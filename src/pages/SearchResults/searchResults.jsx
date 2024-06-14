import React from "react";
import Card from "../../components/Card/card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovie } from "../../services/TMDB";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

const SearchResults = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const { moviename } = useParams();

    useEffect(() => {
        setSearchValue(moviename);
    }, [moviename]);

    useEffect(() => {
        console.log(searchValue);
        const getMovies = async () => {
            try {
                searchMovie(searchValue).then((response) => {
                    console.log(response);
                    setMovies(response);
                    setIsLoading(false);
                });
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, [searchValue]);

    return (
        <div className="dark">
            {isLoading && <div>Loading...</div>}
            <NavBar />
            {!isLoading && (
                <div className="mt-2">
                    <div>
                        <h1 className="text-4xl text-center font-bold mt-10">
                            Search: {moviename}
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
                    </div>
                </div>
            )}
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default SearchResults;
