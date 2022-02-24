import axios from 'axios';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import BuyRatingTable from '../BuyRatingTable/BuyRatingTable';
import './CompanyValuation.scss';
import StockScoreComponent from '../StockScoreComponent/StockScoreComponent';

export default class CompanyValuation extends Component {
    state = {
        DCF : null,
        buyRatings: null,
        stockScore: null
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
            .then(response => {
                axios.get('http://localhost:8000/company/'+this.props.ticker+'/stock-score')
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        stockScore: response.data[0]
                    })
                })
            })
    }
  render() {
    if ( !this.state.DCF || !this.state.buyRatings || !this.state.stockScore) {
        return <div class="loader"></div>
    }  

    return <div className='company-valuation'>
        <section className='company-valuation__dcf-container'>
            {/* <p>DCF Valuation</p>
            <p>{'$' + Math.round(this.state.DCF.dcf)}</p> */}
            <StockScoreComponent scores={this.state.stockScore} DCF={this.state.DCF}/>
        </section>
        <section className='company-valuation__rating-table'>
            <BuyRatingTable ratings={this.state.buyRatings} />
        </section>
    </div>;
  }
}
