import React, { useEffect, useState } from 'react';
import '../App.css';

const ListSpecies = () => {
    // Create state for species, and people.
    const [species, setSpecies] = useState([]);
    // const [people, setPeople] = useState([]);

    useEffect(() => {
        getSpecies();
        // getPeople();
    }, []);

    //====================================

    // Here I'm able to fetch the data and set state from all pages of the "species" end point.

    //====================================

    const getSpecies = async () => {
        let morePages = true;
        let currentPage = 1;
        try {
            while (morePages) {
                let res = await fetch(
                    `https://swapi.dev/api/species/?page=${currentPage}`
                );
                let data = await res.json();
                data.next !== null ? currentPage++ : (morePages = false);
                setSpecies((prevState) => [...prevState, ...data.results]);
                // console.log(data.results);
            }
        } catch (err) {
            console.error(err);
        }
    };

    //====================================

    // Below I was trying to find a way to get the data from the people key within data.results from the "species" fetch call, but can't figure out how to list each person with the correspinding species.

    //====================================

    // const getPeople = async () => {
    //   let morePages = true;
    //   let currentPage = 1;
    //   try {
    //     while (morePages) {
    //       let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
    //       let data = await res.json();
    //       (data.next !== null ? currentPage++ : morePages = false);
    //       // console.log(data.results);
    //       for (let i=0; i < data.results.length; i++) {
    //         // console.log(data.results[i]);
    //         setPeople(prevState => [...prevState, ...data.results[i]])
    //       }
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    //====================================

    // Below I have listed each species name with their corresponding attributes.

    // I had really wanted to be able to take the link given on the "people" key in data.results from the "species" end point, but wasn't able to figure out a way to map through both the "species" AND the "people" end points at the same time and within the same div, which is why you see the API link listed instead of the names of each person within each species.

    //====================================

    return (
        <div id='container'>
            {species.map((species, index) => (
                <div key={index} id='box'>
                    <p id='name'>{species.name}</p>
                    <p id='details'>
                        Classification - {species.classification}
                    </p>
                    <p id='details'>Designation - {species.designation} cm</p>
                    <p id='details'>
                        Average Height - {species.average_height} kg
                    </p>
                    <p id='details'>
                        Average Lifespan - {species.average_lifespan}
                    </p>
                    <p id='details'>Home Planet - {species.homeworld}</p>
                    <p id='details'>People - {species.people}</p>
                </div>
            ))}
        </div>
    );
};

export default ListSpecies;
