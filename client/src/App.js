import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import LandingPage from './pages/LandingPage/LandingPage';
import FundPage from './pages/FundPage/FundPage';
import CompanyPage from './pages/CompanyPage/CompanyPage';
import FundListPage from './pages/FundListPage/FundListPage';
import TopStocksPage from './pages/TopStocksPage/TopStocksPage';

function App() {
;


  return (
<BrowserRouter>
{/* <Header /> */}
  <Switch>
    <Route path='/' exact component={LandingPage} /> 
    <Route path='/company' component={CompanyPage} />
    <Route path='/funds' exact component={FundListPage} />
    <Route path='/funds/:CIK' component={FundPage} />
    <Route path='/charts' exact component={ChartsPage} /> 
    <Route path='/charts/most_held_stocks' component={TopStocksPage} />
  </Switch>
</BrowserRouter>
  );
}

export default App;
