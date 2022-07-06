import React, { useState, createContext } from 'react';
import './assets/styles/style.css';
import Header from './layouts/header';
import Banner from './layouts/banner';
import ChangeTheme from './themes/changeTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import Container from './layouts/container';
import Home from './routes/home';
import Services from './routes/services';
import About from './routes/about';
import Portfolio from './routes/portfolio';
import Contact from './routes/contact';
export const theme = createContext();

function App() {
  const [themeColor, setThemeColor] = useState('orangered');
  const [background, setBackground] = useState('white');
  const [NavBackground, setNavBackground] = useState('white');
  const [Shadow, setShadow] = useState('white');
  const [paColor, setPaColor] = useState('black');
  // const changeTheme = (color) => setThemeColor(color);
  // const changeBackground = (color) => setBackground(color);
  // const changeNavBackground = (color) => setNavBackground(color);
  // const changeShadow = (color) => setShadow(color);
  // const changePaColor = (color) => setPaColor(color);
  const [openNav, setOpenNav] = useState(false)
  return (
    <theme.Provider value={{ themeColor, background, paColor, NavBackground, Shadow }}>
      <BrowserRouter>
        <div className='app' style={{ '--themeColor': themeColor, '--NavBackground': NavBackground, '--Shadow': Shadow, '--background': background, '--paColor': paColor }}>
          <span className='openNav' onClick={() => setOpenNav(!openNav)}> {openNav ? <CloseIcon /> : <ClearAllIcon />}</span>
          <Header setOpenNav={setOpenNav} openNav={openNav} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/portfolio" element={<Portfolio />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
          <ChangeTheme setThemeColor={setThemeColor} setBackground={setBackground} setNavBackground={setNavBackground} setShadow={setShadow} setPaColor={setPaColor} />
        </div>
      </BrowserRouter>
    </theme.Provider>
  );
}

export default App;
