import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import DataManager from '../../modules/APIDatabaseCallManagerBrendan';

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return DataManager.getAll("employees", "location").then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };
  const deleteEmployee = id => {
    DataManager.delete("employees", id)
      .then(() => DataManager.getAll("employees", "location").then(setEmployees));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} {...props} />)}
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/employees/new") }}>
            Add New Employee
        </button>
      </section>
    </div>
  );
};
export default EmployeeList