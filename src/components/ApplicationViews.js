import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
//import LocationCard from "./location/LocationCard";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import Login from "./auth/Login";
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import EmployeeForm from "./employee/EmployeeForm"

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />
        }}
      />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }

        }} />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props} />
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
      }} />
      <Route
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }

        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />
      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;