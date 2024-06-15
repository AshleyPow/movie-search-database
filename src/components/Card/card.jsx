import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../constants/const";

const Card = ({ id, title, description, thumbnail, releaseDate, rating }) => {
  console.log(id);
  return (
    <div className="card w-80 h-auto p-2 bg-gray-100 relative overflow-visible shadow-md mb-20">
      <div className="card-img bg-orange-300 h-3/5 w-full rounded-md transition duration-300 hover:translate-y-[-20%] hover:shadow-lg">
        <img
          src={thumbnail ? `${img_300}/${thumbnail}` : unavailable}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="card-info mt-4">
        <p className="text-title font-bold text-2xl leading-6 text-center">
          {title}
        </p>
        <div className="line-clamp-3">
          <p className="text-body text-sm pb-2 mt-2 text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="card-footer w-full flex justify-center items-center pt-2">
        <span className="text-title font-semibold text-xl">
          <FontAwesomeIcon
            icon={faStar}
            size="xs"
            className="mr-2"
            style={{ color: "orange" }}
          />
          {parseFloat(rating).toFixed(1)}
        </span>
      </div>
      <div className="card-button w-full flex justify-center items-end mt-4">
        <Link to={`/moviedetails/${id}`} className="text-blue-500">
          <button className="border border-gray-800 px-4 py-2 rounded-full transition duration-300 hover:bg-gray-800 hover:text-white align-bottom">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;



