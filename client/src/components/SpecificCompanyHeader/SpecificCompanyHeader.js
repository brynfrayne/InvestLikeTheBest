import React from 'react';

export default function SpecificCompanyHeader({companyData, price, img}) {
    
    return <div>
      <h1 className="company-page__title">{companyData.name}</h1>
      <p className="company-page__ticker">Ticker: {companyData.ticker}</p>
      <p className="company-page__ticker">Price: ${price.price}</p>
      <p className="company-page__ticker">Volume:{price.volume}</p>
      <img className='company-page__image' src={img}  alt='/'/>
    </div>;
  }

