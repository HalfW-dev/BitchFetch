import React from 'react';

import classes from './Bitch.module.css';

const Bitch = (props) => {
  return (
    <li className={classes.bitch}>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Bitch;
