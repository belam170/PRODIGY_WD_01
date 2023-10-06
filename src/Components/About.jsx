import React, { useState } from 'react';
import chefInfo from './Chef';

function About() {
  const [chefs, setChiefs] = useState(chefInfo);

  return (
    <div className='container-about'>
      <h1>Our Chefs</h1>
      <div className='chef-container'>
        {chefs.map((chef) => (
          <div key={chef.id} className='container-det'>
            <div className='cox'>
              <img src={chef.image} alt='' />
              <h3>{chef.name}</h3>
              <p>{chef.age} years</p>
              <p>{chef.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
