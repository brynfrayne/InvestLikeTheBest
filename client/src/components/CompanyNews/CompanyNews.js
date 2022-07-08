import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CompanyNews.scss';
import uniqid from 'uniqid';


export default class CompanyNews extends Component {
state = {
    news: null
}

    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URI + '/company/'+this.props.ticker+'/news')
            .then(response => {
                console.log(response.data)
                this.setState({
                    news:response.data.slice(0,20)
                })
            })
    }
  render() {
      console.log(this.state.news)
      if (!this.state.news) {
        return <div className="loader"></div>
      }
    return <div>
        {this.state.news.map(item=> {
        return <section className='news'><Link className='news__link' to={{pathname: item.url}} target="_blank" key={uniqid()}>
            <h5 className='news__title'>{item.title}</h5>
            <div className='news__date-site-container'>
                <p className='news__date'>{item.publishedDate.split(' ')[0]}</p>
                <p className='news__site'>{item.site}</p>
            </div>
            <p className='news__text'>{item.text}</p>
        </Link></section>
        })}
    </div>;
  }
}
