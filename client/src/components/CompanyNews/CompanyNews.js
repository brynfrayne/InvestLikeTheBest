import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CompanyNews.scss';

export default class CompanyNews extends Component {
state = {
    news: null
}

    componentDidMount(){
        axios.get('http://localhost:8000/company/'+this.props.ticker+'/news')
            .then(response => {
                console.log(response.data)
                this.setState({
                    news:response.data
                })
            })
    }
  render() {
      if (!this.state.news) {
        return <div class="loader"></div>
      }
    return <div>
        <Link to={this.state.news[0].url}>
            <div className='news__image' style={{backgroundImage: `url(${this.state.news[0].image})`}}></div>
            <h5>{this.state.news[0].title}</h5>
            <p>{this.state.news[0].text}</p>
            <p>{this.state.news[0].date}</p>
        </Link>
    </div>;
  }
}
