import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/DataManager';
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "", address: "" });

    useEffect(() => {
        //get(id) from DataManager and hang on to the data; put it into state
        DataManager.getAny("locations", props.locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
            });
    }, [props.locationId]);

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./nashville.jpg')} alt="Nashville" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                <p>Address: {location.address}</p>
            </div>
        </div>
    );

}


export default LocationDetail;