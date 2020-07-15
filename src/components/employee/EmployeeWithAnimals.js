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
    const deleteAnimal = id => {
        DataManager.delete("animals", id)
            .then(() => DataManager.getAll("animals").then(setAnimals)).then(() =>
                props.history.push("/employees")
            );
    };
    

    return (
        <div className="card">
            <p>Employee: {employee.name}</p>
            {console.log("employeeWithAnimals", employee)}
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    deleteAnimal={deleteAnimal}
                    {...props}
                />
            )}
        </div>
    );
};

export default EmployeeWithAnimals;