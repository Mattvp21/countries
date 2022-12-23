import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {
    const [countries, setCountries] = useState([])
    const [searchfield, setSearchField] = useState('');
    const [selection, setSelection] = useState('');
   



 // eslint-disable-next-line react-hooks/exhaustive-deps
 async function getData() {
  const response = await fetch('https://restcountries.com/v2/all')
  const data = await response.json()
    if(selection === '') {
      setCountries(data)
    } else if(selection === 'Africa'){
      setCountries(data.filter(c => c.region === 'Africa'))
    } else if(selection === 'Americas'){
      setCountries(data.filter(c => c.region === 'Americas'))
    } else if(selection === 'Asia'){
      setCountries(data.filter(c => c.region === 'Asia'))
    } else if(selection === 'Europe'){
      setCountries(data.filter(c => c.region === 'Europe'))
    } else if(selection === 'Oceania'){
      setCountries(data.filter(c => c.region === 'Oceania'))
    }
      
}




  useEffect(() => {
      getData()
  }, [getData])


   const handleOnClick = (region) => {
      setSelection(region)
      
   }


  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchfield.toLowerCase()))
    
    return (
        <div className="countries">
        
          <div className='search-drop'>
            <FontAwesomeIcon style={{position: 'absolute','width' : '30px', 'height' : '20px', transform: 'translate(1rem, 1rem)'}} icon={faSearch}/>
              <input className='search-bar' onChange={(e) => setSearchField(e.target.value)} placeholder='Search for a country'/>
              
      <DropdownButton id="dropdown-item-button" title="Filter By Region">
      <Dropdown.Item  onClick={() => handleOnClick('Africa')} as="button">Africa</Dropdown.Item>
      <Dropdown.Item  onClick={() => handleOnClick('Americas')} as="button">America</Dropdown.Item>
      <Dropdown.Item  onClick={() => handleOnClick('Asia')} as="button">Asia</Dropdown.Item>
      <Dropdown.Item  onClick={() => handleOnClick('Europe')}as="button">Europe</Dropdown.Item>
      <Dropdown.Item  onClick={() => handleOnClick('Oceania')} as="button">Oceania</Dropdown.Item>
    </DropdownButton>
          
        </div>
              
        <CountryList countries={filteredCountries} />  
     </div>
    );
}

export default Home;