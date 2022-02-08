import React, { Component } from 'react';
import axios from 'axios';
export default class SpecificCompanyHeader extends Component {
  state = {
    price: null,
    img: null

  }
  
  componentDidMount() {
    axios.get(`http://localhost:8000/company/${this.props.companyData.ticker}/price`)
          .then(response => {
            console.log(response.data)
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
      <h1 className="company-page__title">{this.props.companyData.name}</h1>
      <p className="company-page__ticker">Ticker: {this.props.companyData.ticker}</p>
      <p className="company-page__ticker">Price: $ {this.state.price.price}</p>
      <p className="company-page__ticker">Volume:{this.state.price.volume}</p>
      <img className='company-page__image' src={this.state.img}  alt='/'/>
    </div>;
  }
}

