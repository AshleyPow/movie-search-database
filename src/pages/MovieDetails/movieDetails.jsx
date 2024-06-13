import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

const MovieDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              className="w-full h-auto"
              src="https://dummyimage.com/300x400"
              alt="Movie Thumbnail"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Movie Title</h2>
            <p className="text-gray-600 mb-4">Movie Description</p>
            <div className="flex mb-4">
              <span className="mr-2">Rating:</span>
              <span className="text-yellow-500">4.5/5</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Genre:</span>
              <span>Action, Adventure</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Release Date:</span>
              <span>January 1, 2022</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Duration:</span>
              <span>2h 30m</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Director:</span>
              <span>John Doe</span>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">Cast:</span>
              <span>Actor 1, Actor 2, Actor 3</span>
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
