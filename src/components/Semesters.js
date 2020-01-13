import React from 'react';
import styled from 'styled-components';

const  = styled.div``;
const props = Semesters => (
  <div className="container">
    <div className="columns is-multiline ">
      <div className="column is-4">
        <div className="card">
          <img src={props.img} />
          <h4>{props.text}</h4>
          <p>{props.lasttxt}</p>
        </div>
      </div>
    </div>
  </div>
);
export default Semesters;
