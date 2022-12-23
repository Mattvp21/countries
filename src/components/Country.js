import React from 'react';

import { Link } from 'react-router-dom';

function Country({country}) {
    const {name, region, flags, population, capital} = country
    return (
        <div className='card-container'>
            <div className='card' >
                
                
                <Link to={`/${name}`}><img className='image' src={flags.png} alt={name}/></Link>
             
                 
             <div className='card-list'>
             <h1 className='country-name'>{name}</h1>
                 <ul>
                 <li>Population: {population}</li>
                 <li>Region: {region}</li>
                 <li>Capital: {capital}</li>
                 </ul>
                 
             
             </div>
             
             
            
             
            
         </div>
        </div>
            
       
    );
}

export default Country;