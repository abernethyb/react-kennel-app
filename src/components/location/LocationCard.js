import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./nashville.jpg")} alt="Nashville" />
        </picture>
        <h3>
          Location: <span className="card-locationname">{props.location.name}</span>
        </h3>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;