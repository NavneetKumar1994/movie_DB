import React from 'react';
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import NewRelease from './components/NewRelease';
import WhatsHot from './components/WhatsHot';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <header style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
             <Link to='/' style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
              <MenuIcon/>
             </Link>
         <h4 style={{ color: 'black',backgroundColor:'orange',padding:'2px 8px 2px 8px', borderRadius:'20px' }}>Movie DB</h4>
           <nav style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
              <Link to='/new' style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>New Release</Link>
              <Link to='/hot' style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>What's Hot</Link>     
           </nav>
      </header>
        <Routes>
          <Route path='/new' element={<NewRelease/>}/>
          <Route path='/hot' element={<WhatsHot/>}/>
        </Routes>
        <footer style={{ backgroundColor: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <p>upGrad Frontend Hackathon</p>  
        </footer>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
