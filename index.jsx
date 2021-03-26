import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  const theFilter = superheroes
    .filter((current) => current.powerstats.power < 25)
    .filter((current) => current.appearance.hairColor === 'No Hair');

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  function foritche(tf) {
    // eslint-disable-next-line max-len
    const tff = tf.map((current) => <Superhero name={current.name} power={current.powerstats.power} img={current.images.sm} />);
    return tff;
  }

  return (
    <div>
      {foritche(theFilter)}
    </div>
    // <div>
    //   {
    //     theFilter.length > 0 && (
    //       <Superhero
    //         name={theFilter[0].name}
    //         power={theFilter[0].powerstats.power}
    //         img={theFilter[0].images.sm}
    //       />
    //     )
    //   }
    // </div>
  );
};
