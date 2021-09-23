import React, { useEffect, useState } from 'react';

const Listresults = () => {
  const [names, setNames] = useState([]);
  // const [people, setPeople] = useState([]);

    useEffect(() => {
        getNames();
    }, []);

    const getNames = async () => {
      let morePages = true;
      let currentPage = 1;
          try {
            while (morePages) {
              let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
              let data = await res.json();
              (data.next !== null ? currentPage++ : morePages = false);
              console.log(currentPage);
              setNames(data.results);
            }
          } catch (err) {
              console.error(err);
          }
    };
    return <div>
      {names.map((name, index) => (
        <div key={index} id='species'>
          <h2>{name.name}</h2>
        </div>
      ))}
    </div>;
};

export default Listresults;
