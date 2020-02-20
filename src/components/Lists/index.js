import React from 'react';

const index = (props) => {
  console.log(props.elements);
  return (
    <div>
      {props.elements.map((element, index) => (
        <ul key={index}>
          <li>{element.firstName}</li>
          <li>{element.lastName}</li>
        </ul>
      ))}
    </div>
  );
};

export default index;
