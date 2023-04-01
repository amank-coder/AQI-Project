import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AirPurifier from './pages/AirPurifier';
import AirQuality from './pages/AirQuality';
import FaceMask from './pages/FaceMask';
import Home from './pages/Home';
import Business from './pages/Business';
import Community from './pages/Community';
import News from './pages/News';
import Support from './pages/Support';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/airquality' element={<AirQuality />}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/airpurifier' element={<AirPurifier />}/>
          <Route path='/business' element={<Business />}/>
          <Route path='/facemask' element={<FaceMask />}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/support' element={<Support />}/>
        </Routes>
        <Footer />
    </Router>       
      
    )
}

export default App;
