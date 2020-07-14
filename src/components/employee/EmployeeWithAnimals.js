import React, { useState, useEffect } from 'react'
import DataManager from '../../modules/APIDatabaseCallManagerBrendan'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    DataManager.embededGet("employees", props.match.params.employeeId, "animals")
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;