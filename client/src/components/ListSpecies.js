import React, { useEffect, useState } from 'react';
import '../App.css';

const ListSpecies = () => {
  const [species, setSpecies] = useState([]);
  const [people, setPeople] = useState([]);

    useEffect(() => {
        getSpecies();
        getPeople();
    }, []);

    const getSpecies = async () => {
      let morePages = true;
      let currentPage = 1;
          try {
            while (morePages) {
              let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
              let data = await res.json();
              (data.next !== null ? currentPage++ : morePages = false);
              setSpecies(prevState => [...prevState, ...data.results]);
              // console.log(data.results);
            }
          } catch (err) {
              console.error(err);
          }
    };

    const getPeople = async () => {
      let morePages = true;
      let currentPage = 1;
      try {
        while (morePages) {
          let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
          let data = await res.json();
          (data.next !== null ? currentPage++ : morePages = false);
            for(let i=0; i < data.results.length; i++){
              for(let n=0; n < data.results[i].people.length; n++){
                let arr = [];
                let eachPerson = data.results[i].people[n];
                let resTwo = await fetch(`${eachPerson}`);
                let dataTwo = await resTwo.json();
                arr.push(dataTwo);
                console.log(dataTwo);
                setPeople(prevState => [...prevState, ...arr])
              }
            }
          }    
      } catch (err) {
          console.error(err);
      }
};

    return(
      <div id='container'>

        {species.map((species, index) => (
          <div key={index} id='species'>
            <h2>{species.name}</h2>
          </div>
        ))}

        {people.map((person, i) => (
                    <ul key={i} id='person'>
                      <li>
                        {person.name}
                      </li>
                    </ul>
        ))}
      </div>
    );
};

export default ListSpecies;
