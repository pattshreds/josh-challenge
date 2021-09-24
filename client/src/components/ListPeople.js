import React, { useEffect, useState } from 'react';
import '../App.css';

const ListPeople = () => {
  const [people, setPeople] = useState([]);

    useEffect(() => {
        getPeople();
    }, []);

    // const getPeople = async () => {
    //   let morePages = true;
    //   let currentPage = 1;
    //       try {
    //         while (morePages) {
    //           let res = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
    //           let data = await res.json();
    //           (data.next !== null ? currentPage++ : morePages = false);
    //           setPeople(prevState => [...prevState, ...data.results]);
    //           console.log(data.results);
    //         }
    //         }
    //       } catch (err) {
    //           console.error(err);
    //       }
    // };

    const getPeople = async () => {
      let morePages = true;
      let currentPage = 1;
          try {
            while (morePages) {
              let res = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
              let data = await res.json();
              (data.next !== null ? currentPage++ : morePages = false);
              setPeople(prevState => [...prevState, ...data.results]);
              // console.log(data.results);
            }
          } catch (err) {
              console.error(err);
          }
    };

    return <div id='container'>
      {people.map((people, index) => (
        <div key={index} id='people'>
          <h2>{people.name}</h2>
        </div>
      ))}
    </div>;
};

export default ListPeople;
