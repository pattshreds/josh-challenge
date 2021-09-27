import React, { useEffect, useState } from 'react';
import '../App.css';

const ListSpecies = () => {
    const [species, setSpecies] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        getSpecies();
        // getPeople();
    }, []);

    const getSpecies = async () => {
      let morePages = true;
      let currentPage = 1;
      try {
        while (morePages) {
          let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
          let data = await res.json();
          (data.next !== null ? currentPage++ : morePages = false);
          setSpecies(prevState => [...prevState, ...data.results])
          // console.log(data.results);
        }    
      } catch (err) {
        console.error(err);
      }
    };

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

    return(
      <div id='container'>
        {species.map((species, index) => (
          <div key={index} id='box'>
            <p id='name'>{species.name}</p>
            <p id='details'>Classification - {species.classification}</p>
            <p id='details'>Designation - {species.designation} cm</p>
            <p id='details'>Average Height - {species.average_height} kg</p>
            <p id='details'>Average Lifespan - {species.average_lifespan}</p>
            <p id='details'>Home Planet(s) - {species.homeworld}</p>
          </div>
        ))}
      </div> 
    );
};    

export default ListSpecies;
