import React from "react";


const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./ru.jpg")} alt="Employee of the month" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <p>Employee</p>
      </div>
    </div>
  );
};

export default EmployeeCard;