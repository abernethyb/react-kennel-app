import React, { useState } from 'react';
import DataManager from '../../modules/APIDatabaseCallManagerBrendan';
import './AnimalForm.css'

const AnimalForm = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the DataManager post method, and redirect to the full animal list
    */
    const constructNewAnimal = evt => {
        evt.preventDefault();
        if (animal.name === "" || animal.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            setIsLoading(true);
            // Create the animal and redirect user to animal list
            DataManager.addObject("animals", animal)
                .then(() => props.history.push("/animals"));
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
                            placeholder="Animal name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AnimalForm