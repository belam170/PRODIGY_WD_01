import React, { useState } from 'react'
import foodItem from './Fooditem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
function Dishes() {
    const[displayFood,setDisplayFood] = useState(foodItem)
  return (
    <div className='container-food'>
        <h1>Our <span style={{color:"green"}}>Dishes</span></h1>
         {displayFood.map((food)=>(
            <div key={food.id} className='food-box'>
                <h2>{food.name}</h2>
                <img src={food.img} alt="" />
                <div className='circle'>
                        ${food.price}
                    </div>
                <p>
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    </p>
               <div className='btn'><button>Buy Now</button></div>
            </div>
    
         ))}
        </div>
  )
}

export default Dishes