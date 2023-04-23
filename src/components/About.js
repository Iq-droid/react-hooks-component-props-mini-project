import React from 'react';

function About(props) {
  return (
    <aside>
      <img src={props.image || "https://via.placeholder.com/215"} alt={props.alt || "blog logo"} />
      <p>{props.text}</p>
    </aside>
  );
}

export default About;