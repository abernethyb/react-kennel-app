import React, { useState } from 'react';
import DataManager from '../../modules/APIDatabaseCallManagerBrendan';
import './EmployeeForm.css'

const EmployeeForm = props => {
    const [employee, setemployee] = useState({ name: "", locationId: ""});
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setemployee(stateToChange);
    };
    DataManager.getAll("locations").then(result => {
        setLocations(result)
    })

    /*  Local method for validation, set loadingStatus, create employee      object, invoke the DataManager post method, and redirect to the full employee list
    */
    const constructNEwemployee = evt => {
        evt.preventDefault();
        if (employee.name === "" || employee.locationId === "") {
            window.alert("Please fill out every field");
        } else {
            setIsLoading(true);
            // Create the employee and redirect user to employee list
            DataManager.addObject("employees", employee)
                .then(() => props.history.push("/employees"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Employee name"
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <select
                        className="form-control"
                        id="locationId"
                        value={employee.locationId}
                        onChange={handleFieldChange}
                        
                    >
                        {locations.map(location =>
                            <option key={location.id} value={location.id} >
                                {location.name}
                            </option>
                        )}
                    </select>
                    <label htmlFor="employeeId">Location</label>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNEwemployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default EmployeeForm