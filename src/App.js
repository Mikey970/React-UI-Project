import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Slideshow from './Slideshow';
import Buttons from './Buttons';
import { BrowserReact as Router } from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom"
import Default from './Default.jsx';
import Ethslide from './Ethslide';
import Dogeslide from './Dogeslide';
import Polkaslide from './Polkaslide';

function App() {
  return (
    <div>
      <Header />
      <Buttons />
      
      <Routes>
        <Route path ='/' element={< Slideshow />} />
        <Route path='/bitcoin' element={<Slideshow />} />
        <Route path='/ethereum' element={< Ethslide />} />
        <Route path='/dogecoin' element={< Dogeslide />} />
         <Route path='/polkadot' element={<Polkaslide />} />
      </Routes>
 </div>
  );
}

export default App;
