import React, { useEffect, useState } from 'react';

const Listresults = () => {
  const [names, setNames] = useState([]);
  // const [people, setPeople] = useState([]);

    useEffect(() => {
        getNames();
    }, []);

    const getNames = async () => {
      let totalNames = [];
      let currentPage = 1;
      let morePages = true;
          try {
            while (morePages != null) {
              let res = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`);
              let data = await res.json();
              totalNames += data.results;
              setNames(data.results);
              console.log(data.results);
              console.log(totalNames);
              currentPage++;
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
