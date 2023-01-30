
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import { createContext, useEffect, useState } from "react";
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry'

export const ThemeContext = createContext(null)



function App() {
  const [theme, setTheme] = useState("light")

  
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="d-flex site-container flex-column" id={theme}>
    <BrowserRouter>
    <header>
          <h1>Where in the world?</h1>
      
        <div className="icon">{
          theme === 'light' ? (
            <FontAwesomeIcon style={{'width' : '40px', 'height' : '30px', 'cursor': 'pointer'}}  onClick={toggleTheme} icon={faMoon} />
          )  : (
            <FontAwesomeIcon style={{'color' : 'white', 'width' : '40px', 'height' : '30px', 'cursor': 'pointer'}} onClick={toggleTheme} icon={faSun} />
          )
        }
        
        <p>{theme === 'light' ? 'Dark' : 'Light'} mode</p>
        </div>
        
    </header>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/:alpha3Code' element={<SingleCountry/>}/>
            </Routes>
     </BrowserRouter>
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
