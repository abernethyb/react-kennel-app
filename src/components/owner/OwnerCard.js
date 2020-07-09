import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./cheezepuff.jpg")} alt="The owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
  <p>{props.owner.animal.name}'s owner</p>
      </div>
    </div>
  );
};

export default OwnerCard;