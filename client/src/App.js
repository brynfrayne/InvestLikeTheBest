import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
<BrowserRouter>
{/* <Header /> */}
  <Routes>
    <Route path='/' exact element={<LandingPage/>} /> 
    {/* <Route path='/:companyId' component={CompanyPage} />
    <Route path='/:fundId' component={FundPage} />
    <Route path='/superInvestors' component={SuperInvestors} /> */}
    <Route path='/charts' element={<ChartsPage />} /> 
  </Routes>
</BrowserRouter>
  );
}

export default App;
