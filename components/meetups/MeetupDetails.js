import React, { Fragment } from 'react';
import classes from './MeetupDetails.module.css';

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
        <img src={props.image} alt={props.title}></img>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetails;