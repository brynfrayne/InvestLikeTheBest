import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
<BrowserRouter>
<Header />
  <Routes>
    {/* <Route path='/' exact component={LandingPage} /> 
    <Route path='/:companyId' component={CompanyPage} />
    <Route path='/:fundId' component={FundPage} />
    <Route path='/superInvestors' component={SuperInvestors} />
    <Route path='/topstocks' component={topStocks} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
