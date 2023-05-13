import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Details from './pages/Details';
import Person from './pages/Person';
import Login from './pages/Login';
import Reg from './pages/Reg';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/details" element={<Details />} />
          <Route path="/person" element={<Person />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;