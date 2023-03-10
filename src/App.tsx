import React from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Soundtracks from './Pages/Soundtracks/Soundtracks';
import Requests from './Pages/Requests/Requests';
import About from './Pages/About/About';
import Overlay from './components/Overlay/Overlay';
// import { useSelector } from 'react-redux';
import { State } from './Redux/Store';
import { useAppSelector } from './Redux/Store';

const App: React.FC = () => {

  const isModalOpen = useAppSelector((state:State)=> state.data.isModalOpen)

  return (
    <div className="App">
      {isModalOpen && <Overlay />}
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/soundtracks' element={<Soundtracks />} />
        <Route path = '/requests' element = {<Requests />} />
        <Route path = '/about' element = {<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
