import React, { useState } from 'react';
import reviwer from './Reviewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Review() {
  const [currentReviewIndex, setReviewIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentReviewIndex > 0) {
      setReviewIndex(currentReviewIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentReviewIndex < reviwer.length - 1) {
      setReviewIndex(currentReviewIndex + 1);
    }
  };

  return (
    <div className='box-reviewer'>
      <div className='reviewer'>
        <h1>What Our <span style={{color:"green"}}>Clients Say</span></h1>
        <div className='sliders'>
        <button onClick={handlePrevClick}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <button onClick={handleNextClick} className='button1'><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <div className='container-reviewer'>
          <img src={reviwer[currentReviewIndex].image} alt="current photo" />
          <div className='reviewer-text'>
            <h2>{reviwer[currentReviewIndex].name}</h2>
            <p>{reviwer[currentReviewIndex].des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
