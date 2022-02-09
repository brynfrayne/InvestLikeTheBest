import React, { Component } from 'react';
import axios from 'axios';
import './SpecificCompanyHeader.scss';
export default class SpecificCompanyHeader extends Component {
  state = {
    price: null,
    img: null

  }
  
  componentDidMount() {
    axios.get(`http://localhost:8000/company/${this.props.companyData.ticker}/price`)
          .then(response => {
            this.setState({
              price:response.data[0]
            })
            axios.get(`http://localhost:8000/company/${this.props.cusip}/${this.props.companyData.ticker}/logo`)
          .then(response => {
            this.setState({
              img: response.data.url
            })
          })
        })
      }
  
  render() {  
    if (!this.state.price || !this.state.img) {
      return <div class="loader"></div>
    }
    
  return <div>
      <h1 className="company-header__title">{this.props.companyData.name}</h1>
      <img className='company-header__image' src={this.state.img}  alt='/'/>
      <div className='company-header__ticker-price-volume-container'>
        <div className='company-header__ticker-exchange-box'>
          <p className="company-header__ticker">Ticker: {this.props.companyData.ticker}</p>
          <p className="company-header__ticker">Primary Exchange: {this.props.companyData.primary_exchange}</p>
        </div>
        <div className='company-header__price-volume-box'>
          <p className="company-header__ticker">Price: $ {this.state.price.price}</p>
          <p className="company-header__ticker">Volume:{this.state.price.volume}</p>
        </div>
      </div>
    </div>;
  }
}

