import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import LandingPage from './pages/LandingPage/LandingPage';
import FundPage from './pages/FundPage/FundPage';
import CompanyPage from './pages/CompanyPage/CompanyPage';
import SpecificCompanyPage from './pages/SpecificCompanyPage/SpecificCompanyPage';
import FundListPage from './pages/FundListPage/FundListPage';
import TopStocksPage from './pages/TopStocksPage/TopStocksPage';

function App() {
;


  return (
<BrowserRouter>
{/* <Header /> */}
  <Switch>
    <Route path='/' exact component={LandingPage} /> 
    <Route path='/company/:period_of_report' exact component={CompanyPage} />
    <Route path='/company/:cusip/:period_of_report' component={SpecificCompanyPage} />
    <Route path='/funds' exact component={FundListPage} />
    <Route path='/funds/:CIK/:period_of_report' component={FundPage} />
    <Route path='/charts' exact component={ChartsPage} /> 
    <Route path='/charts/most_held_stocks' component={ChartsPage} />
  </Switch>
</BrowserRouter>
  );
}

export default App;
