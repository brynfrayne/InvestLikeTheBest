import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  <Routes>
    <Route path='/' exact element={<LandingPage/>} /> 
    <Route path='/company' element={<CompanyPage/>} />
    <Route path='/funds' exact element={<FundPage />} />
    <Route path='/funds/:CIK' element={<FundPage />} />
    {/*<Route path='/superInvestors' component={SuperInvestors} /> */}
    <Route path='/charts' element={<ChartsPage />} /> 
  </Routes>
</BrowserRouter>
  );
}

export default App;
