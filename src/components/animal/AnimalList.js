import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import DataManager from '../../modules/DataManager';

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return DataManager.getAll("animals").then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  const deleteAnimal = id => {
    DataManager.delete("animals", id)
      .then(() => DataManager.getAll("animals").then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />)}
      </div>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/animals/new") }}>
          Admit Animal
          </button>
      </section>
    </>
  );
};
export default AnimalList