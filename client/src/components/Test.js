import React, { useState, useEffect } from 'react';
import '../App.css';

const Test = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        getSpecies();
    }, []);

    const getSpecies = async () => {
        let morePages = true;
        let currentPage = 1;
        let res = await fetch(
            `https://swapi.dev/api/species/?page=${currentPage}`
        );
        let data = await res.json();
        try {
            while (morePages) {
                data.next !== null ? currentPage++ : (morePages = false);
                setSpecies((prevState) => [...prevState, ...data.results]);
                console.log(data.results);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id='container'>
            {species.map((species, index) => (
                <div key={index} id='box'>
                    <p id='name'>{species.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Test;
