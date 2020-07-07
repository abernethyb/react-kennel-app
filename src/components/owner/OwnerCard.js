import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./cheezepuff.jpg")} alt="The owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">The Big Cheeze</span>
        </h3>
        <p>The owner</p>
      </div>
    </div>
  );
};

export default OwnerCard;