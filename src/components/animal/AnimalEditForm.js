import React, { useState, useEffect } from "react"
import DataManager from "../../modules/APIDatabaseCallManagerBrendan"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: animal.employeeId
    };

    DataManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    DataManager.getAny("animals", props.match.params.animalId)
      .then(animal => {
        DataManager.getAll("employees", "location").then(employeesFromApi => {
          setEmployees(employeesFromApi);
          setAnimal(animal);
          setIsLoading(false);
        })

      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <select
              className="form-control"
              id="employeeId"
              value={animal.employeeId}
              onChange={handleFieldChange}
            >
              {employees.map(employee =>
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              )}
            </select>
            <label htmlFor="employeeId">Employee</label>
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm