import axios from 'axios';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import BuyRatingTable from '../BuyRatingTable/BuyRatingTable';
import './CompanyValuation.scss';

export default class CompanyValuation extends Component {
    state = {
        DCF : null,
        buyRatings: null
    }
    
    componentDidMount(){
        axios.get('http://localhost:8000/company/'+this.props.ticker+'/dcf')
            .then(response => {
                console.log(response.data)
                this.setState({
                    DCF: response.data[0]
                })
            })
            .then(response => {
                axios.get('http://localhost:8000/company/'+this.props.ticker+'/buy-ratings')
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        buyRatings: response.data
                    })
                })
            })
    }
  render() {
    if ( !this.state.DCF || !this.state.buyRatings) {
        return <div class="loader"></div>
    }  

    return <div>
        <section className='company-valuation__dcf-container'>
            <p>DCF Valuation</p>
            <p>{'$' + Math.round(this.state.DCF.dcf)}</p>
        </section>
        <section className='company-valuation__rating-table'>
            <BuyRatingTable ratings={this.state.buyRatings} />
        </section>
    </div>;
  }
}
