import React from 'react';
import './StockScoreComponent.scss';

export default function StockScoreComponent({scores}) {
  return <div>
      <div className='stock-score__column'>
          <p>Overall Rating</p>
          <p>{scores.rating}</p>
      </div>
      <div className='stock-score__row'>
        <div className='stock-score__column'>
            <p>Rating Recommendation</p>
            <p>{scores.ratingRecommendation}</p>
        </div>
        <div className='stock-score__column stock-score__column--right'>
            <p>Rating Score</p>
            <p>{scores.ratingScore}</p>
        </div>
      </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p>DCF Recommendation</p>
                <p>{scores.ratingDetailsDCFRecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p>DCF Score</p>
                <p>{scores.ratingDetailsDCFScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p>DER Recommendation</p>
                <p>{scores.ratingDetailsDERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p>DER Score</p>
                <p>{scores.ratingDetailsDEScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p>PB Recommendation</p>
                <p>{scores.ratingDetailsPBRecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p>PB Score</p>
                <p>{scores.ratingDetailsPBScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p>PE Recommendation</p>
                <p>{scores.ratingDetailsPERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p>PE Score</p>
                <p>{scores.ratingDetailsPEScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p>ROE Recommendation</p>
                <p>{scores.ratingDetailsROERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p>ROE Score</p>
                <p>{scores.ratingDetailsROEScore}</p>
            </div>
        </div>
  </div>;
}
