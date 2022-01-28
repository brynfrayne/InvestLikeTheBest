import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import LandingPage from './pages/LandingPage/LandingPage';
import FundPage from './pages/FundPage/FundPage';
import CompanyPage from './pages/CompanyPage/CompanyPage';

function App() {
;


  return (
<BrowserRouter>
{/* <Header /> */}
  <Switch>
    <Route path='/' exact component={LandingPage} /> 
    <Route path='/company' component={CompanyPage} />
    <Route path='/funds' exact component={FundPage} />
    <Route path='/funds/:CIK' component={FundPage} />
    {/*<Route path='/superInvestors' component={SuperInvestors} /> */}
    <Route path='/charts' component={ChartsPage} /> 
  </Switch>
</BrowserRouter>
  );
}

export default App;
