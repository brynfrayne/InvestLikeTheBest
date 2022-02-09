import React, { Component } from 'react';
import axios from 'axios';
import CompanyOwnershipBarChart from '../CompanyOwnershipBarChart/CompanyOwnershipBarChart';
import CompanyOwnershipTable from '../CompanyOwnershipTable/CompanyOwnershipTable';

export default class FundOwnership extends Component {

  render() {
    if ( !this.props.fundOwnership ) {
        return <div class="loader"></div>
    }  
    return <div>
      <p className="company-page__ticker">{this.props.fundOwnership[0].period_of_report}</p>
      <CompanyOwnershipBarChart data={this.props.fundOwnership}/>
      <CompanyOwnershipTable data={this.props.fundOwnership} />
    </div>;
  }
}
