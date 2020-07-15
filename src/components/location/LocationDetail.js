import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/APIDatabaseCallManagerBrendan';
import './LocationDetail.css'
import EmployeeCard from "../employee/EmployeeCard"

const LocationDetail = props => {
    const [location, setLocation] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //get(id) from DataManager and hang on to the data; put it into state
        DataManager.embededGet("locations", props.locationId, "employees")
            .then(result => {
                setLocation(result);
                setEmployees(result.employees)
            });
    }, [props.locationId]);
    const deleteEmployee = id => {
        DataManager.delete("employees", id)
            .then(() => DataManager.getAll("employees", "location").then(setEmployees)).then(() =>
                props.history.push("/locations")
            );
    };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./nashville.jpg')} alt="Nashville" />
                </picture>
                
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                {/* <p>Address: {location.address}</p> */}
                {console.log("employees", employees)}
                {employees.map(employee =>
                <h3>{employee.name} works here</h3>
                    // <EmployeeCard
                    //     key={employee.id}
                    //     employee={employee}
                    //     deleteEmployee={deleteEmployee}
                    //     {...props}
                    // />
                )}

            </div>
        </div>
    );

}


export default LocationDetail;