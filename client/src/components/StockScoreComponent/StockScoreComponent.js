import React from 'react';
import './StockScoreComponent.scss';

export default function StockScoreComponent({scores, DCF}) {
  return <div className='stock-score'>
      <div className='stock-score__row'>
        <div className='stock-score__column'>
            <p className='stock-score__column-title'>DCF Valuation</p>
            <p>{'$' + Math.round(DCF.dcf)}</p>
        </div>
        <div className='stock-score__column stock-score__column--right'>
            <p className='stock-score__column-title'>Overall Rating</p>
            <p>{scores.rating}</p>
        </div>
      </div>
      <div className='stock-score__row'>
        <div className='stock-score__column'>
            <p className='stock-score__column-title'>Rating Recommendation</p>
            <p>{scores.ratingRecommendation}</p>
        </div>
        <div className='stock-score__column stock-score__column--right'>
            <p className='stock-score__column-title'>Rating Score</p>
            <p>{scores.ratingScore}</p>
        </div>
      </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p className='stock-score__column-title'>DCF Recommendation</p>
                <p>{scores.ratingDetailsDCFRecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p className='stock-score__column-title'>DCF Score</p>
                <p>{scores.ratingDetailsDCFScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p className='stock-score__column-title'>DER Recommendation</p>
                <p>{scores.ratingDetailsDERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p className='stock-score__column-title'>DER Score</p>
                <p>{scores.ratingDetailsDEScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p className='stock-score__column-title'>PB Recommendation</p>
                <p>{scores.ratingDetailsPBRecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p className='stock-score__column-title'>PB Score</p>
                <p>{scores.ratingDetailsPBScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p className='stock-score__column-title'>PE Recommendation</p>
                <p>{scores.ratingDetailsPERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p className='stock-score__column-title'>PE Score</p>
                <p>{scores.ratingDetailsPEScore}</p>
            </div>
        </div>
        <div className='stock-score__row'>
            <div className='stock-score__column'>
                <p className='stock-score__column-title'>ROE Recommendation</p>
                <p>{scores.ratingDetailsROERecommendation}</p>
            </div>
            <div className='stock-score__column stock-score__column--right'>
                <p className='stock-score__column-title'>ROE Score</p>
                <p>{scores.ratingDetailsROEScore}</p>
            </div>
        </div>
  </div>;
}
