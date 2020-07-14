import React from "react";


const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./CirclePerson1.svg")} alt="Employee of the month" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <p>Works at our {props.employee.location.name} Location</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        <button type="button"
          onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
      </div>
    </div>
  );
};

export default EmployeeCard;