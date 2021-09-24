import React, { useEffect, useState } from 'react';
import '../App.css';

const Test = () => {
  const [species, setSpecies] = useState([]);

    useEffect(() => {
        getPeople();
    }, []);

    const getPeople = async () => {
          try {
              let res = await fetch(`https://swapi.dev/api/species/`);
              let data = await res.json();
              // console.log(data.results);
              for(let i=0; i < data.results.length; i++){
                // console.log(data.results[i].people);
                for(let n=0; n < data.results[i].people.length; n++){
                  // console.log(data.results[i].people[n]);
                  let eachPerson = data.results[i].people[n];
                  let resTwo = await fetch(`${eachPerson}`)
                  let dataTwo = await resTwo.json();
                  console.log(dataTwo.name);
                }
              }
              setSpecies(data.results);
          } catch (err) {
              console.error(err);
          }
    };

    return <div id='container'>
      {species.map((species, index) => (
        <div key={index} id='species'>
          <h2>{species.name}</h2>
        </div>
      ))}
    </div>;
};

export default Test;
