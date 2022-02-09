import axios from 'axios';
import React, { Component } from 'react';
import './CompanyValuation.scss';

export default class CompanyValuation extends Component {
    state = {
        DCF : null
    }
    
    componentDidMount(){
        axios.get('http://localhost:8000/company/'+this.props.ticker+'/dcf')
            .then(response => {
                console.log(response.data)
                this.setState({
                    DCF: response.data[0]
                })
            })
    }
  render() {
    if ( !this.state.DCF) {
        return <div class="loader"></div>
    }  

    return <div>
        <section className='company-valuation__dcf-container'>
            <p>DCF Valuation</p>
            <p>{'$' + Math.round(this.state.DCF.dcf)}</p>
        </section>
    </div>;
  }
}
