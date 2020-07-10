import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          return <AnimalList />
        }} />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
      }} />
      <Route
        path="/locations"
        render={props => {
          return <LocationCard />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;