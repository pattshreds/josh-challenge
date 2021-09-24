import React, { useEffect, useState } from 'react';
import '../App.css';

const ListSpecies = () => {
  const [species, setSpecies] = useState([]);

    useEffect(() => {
        getSpecies();
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
              console.log(data.results);
            }
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

export default ListSpecies;
