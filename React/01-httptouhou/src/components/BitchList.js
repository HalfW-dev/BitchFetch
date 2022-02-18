import React from 'react';

import Movie from './Bitch';
import classes from './BitchList.module.css';

const BitchList = (props) => {
  return (
    <ul className={classes['bitch-list']}>
      {props.bitches.map((bitch) => (
        <Movie
          key={bitch.id}
          name={bitch.name}
          age={bitch.age}
          description={bitch.description}
        />
      ))}
    </ul>
  );
};

export default BitchList;
