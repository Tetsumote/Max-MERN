import React from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH, VALIDATOR_MIN } from "../../shared/util/validators";

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address:'20 W 34th St., New York, NY 10001, Stany Zjednoczone',
        location:{
            lat: 40.7484445, 
            lng:-73.9882393
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address:'20 W 34th St., New York, NY 10001, Stany Zjednoczone',
        location:{
            lat: 40.7484445, 
            lng:-73.9882393
        },
        creator: 'u2'
    }
]

const UpdatePlace = () => {

    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    if(!identifiedPlace){
        return <div className="center"><h2>Could not find place!</h2></div>
    }

    return <form className="place-form">
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={() => {

            }}
            value={identifiedPlace.title}
            valide={true}
        />
        <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={() => {

            }}
            value={identifiedPlace.title}
            valide={true}
        />
        <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>

}

export default UpdatePlace;