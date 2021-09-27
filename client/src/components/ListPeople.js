import React, { useEffect, useState } from 'react';
import '../App.css'

const ListPeople = () => {
  // Create state for people
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

//====================================

  // Here I was able to fetch data and set state from all pages of the "people" end point.

//====================================

  const getPeople = async () => {
    let morePages = true;
    let currentPage = 1;
    try {
      while (morePages) {
        let res = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
        let data = await res.json();
        (data.next !== null ? currentPage++ : morePages = false);
        setPeople(prevState => [...prevState, ...data.results]);
      }  
    } catch (err) {
        console.error(err);
      }
  }

//====================================

  // Here I was able to map through the data I set to the state and display the peoples names and attributes.

  // Once again, I had really wanted to be able to list details such as "Home Planet" as the name of the planet, but wasn't able to figure out a way to map through two seperate states from seperate API calls at the same time within the same div, which is why the API links are listed instead of the planet names.

//====================================

    return (
      <div id='container'>
          {people.map((people, index) => (
            <div key={index} id='box'>
              <p id='name'>{people.name}</p>
              <p id='details'>Gender - {people.gender}</p>
              <p id='details'>Height - {people.height} cm</p>
              <p id='details'>Weight - {people.mass} kg</p>
              <p id='details'>Hair Color - {people.hair_color}</p>
              <p id='details'>Skin / body Color - {people.skin_color}</p>
              <p id='details'>Eye Color - {people.eye_color}</p>
              <p id='details'>Birth Year - {people.birth_year}</p>
              <p id='details'>Home Planet - {people.homeworld}</p>
            </div>
          ))}
      </div>
    );
};

export default ListPeople;