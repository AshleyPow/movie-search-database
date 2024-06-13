import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ key, title, description, thumbnail, releaseDate, rating }) => {
  return (
    <div className="card w-80 h-auto p-2 bg-gray-100 relative overflow-visible shadow-md">
      <div className="card-img bg-orange-300 h-3/5 w-full rounded-md transition duration-300 hover:translate-y-[-20%] hover:shadow-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="card-info mt-4">
        <p className="text-title font-bold text-2xl leading-6">{title}</p>
        <p className="text-body text-sm pb-2 mt-2">{description}</p>
      </div>
      <div className="card-footer w-full flex justify-center items-center pt-2">
        <span className="text-title font-bold text-xl">
          <FontAwesomeIcon
            icon={faStar}
            size="xs"
            className="mr-2"
            style={{ color: "orange" }}
          />
          {rating}
        </span>
      </div>
      <div className="card-button w-full flex justify-center items-center mt-2"></div>
      <Link to="/moviedetails" className="text-blue-500">
        <button
          className="border border-gray-800 px-4 py-2 rounded-full transition duration-300 hover:bg-gray-800 hover:text-white">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
