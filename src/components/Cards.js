import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Card = props => (
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3"></figure>
      <img src={'props.img'} />
    </div>
    <p>{'props.largetext'}</p>
    <p>{'props.smalltexttext'}</p>
    <div className="button is-link is-pulled-left is-medium">OUR SERVICE</div>
    <img src={'props.icon'} />
  </div>
);
export default Cards;
