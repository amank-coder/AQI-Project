import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FaceMask from './pages/FaceMask';
import AirPurifier from './pages/AirPurifier';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/air-purifier' element={<AirPurifier />}/>
          <Route path='/face-mask' element={<FaceMask />}/>
          
        </Routes>
        <Footer />
    </Router>       
      
    )
}

export default App;
