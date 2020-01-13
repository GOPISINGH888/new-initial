import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Card = () => (
  <Link to="/subject">
    <div className="card">
      <div className="has-text-centered">
        <figure className="image is-128x128">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpqAoMoJ
                DMLACpy-Jp9CWIPAKEUN6_V6yDg1qQCQMjG4YuKaS"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Computer Grpahics</p>
        <p className="subtitle is-6">Last updted: 23rd september 2019</p>
        <button className="button is-danger is-rounded">Open</button>
      </div>
    </div>
  </Link>
);

export default Card;
