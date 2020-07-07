import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            <img src={require("./ru.jpg")} alt="employee of the month" />
        </picture>
        <h3>
          Name: <span className="card-employeename">Ru</span>
        </h3>
        <p>Breed: cat</p>
      </div>
    </div>
  );
};

export default EmployeeCard;