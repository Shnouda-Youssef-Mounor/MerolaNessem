import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';
import Work from './Pages/Work';
import About from './Pages/About';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <div>
    <Navbar/>
    <div className='APP'>
    <Routes>
    <Route path="/MerolaNessem/Work" element={<Work/>}/>
      <Route path="/MerolaNessem" element={<Work/>}/>
      <Route path="/MerolaNessem/About" element={<About/>}/>
      <Route path="/MerolaNessem/Contact" element={<Contactus/>}/>
    </Routes>

    
<footer className='footer'><SocialMedia/></footer>
</div>
    </div>
      );
}

export default App;
