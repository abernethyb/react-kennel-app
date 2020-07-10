import React from "react";

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
      </div>
    </div>
  );
};

export default LocationCard;