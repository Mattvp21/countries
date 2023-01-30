import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'
import {Vortex} from 'react-loader-spinner'
function SingleCountry() {
   
    const { alpha3Code } = useParams();
    const [loading, setLoading] = useState(true)
    const [singleCountry, setSingleCountry] = useState([]);
    const [singleCountryImage, setSingleCountryImage] = useState([]);
   

    useEffect(() => {
        const getData = () => {
            fetch(`https://restcountries.com/v2/alpha/${alpha3Code.toLowerCase()}`)
           .then(response => response.json())
           .then(country => {
                   setSingleCountry(country)
                   setSingleCountryImage(country.flags.svg)
            } )
            .finally(() =>  setLoading(false) )
       }
        getData()
        
      }, [alpha3Code]) 

    console.log(singleCountry.languages)
    return (
        loading ? (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Vortex
  visible={true}
  height="200px"
  width="200px"
  
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['hsl(209, 23%, 22%)', 'hsl(207, 26%, 17%)', 'hsl(200, 15%, 8%)', 'hsl(0, 0%, 52%)', 'hsl(0, 0%, 98%)', 'hsl(0, 0%, 100%)']}
/> 
        </div>
        ) : (
            <div>
        <div className='btn-container'>
            <Link to='/'>
            <button className='btn-container__button'><FontAwesomeIcon icon={faArrowRotateLeft}> </FontAwesomeIcon>Back</button>
            </Link>
            
        </div>
            <div className='list-container'>     
                        <img className='single-image' src={singleCountryImage} alt='country'/>
            <div className='list'>
            <div className='list-1'>
                <h2>{singleCountry.name}</h2>
                        <ul>
                            <li><strong>Native Name:</strong>{' '}{singleCountry.nativeName}</li>
                            <li><strong>Population:</strong>{' '}{singleCountry.population}</li>
                            <li><strong>Region:</strong>{' '}{singleCountry.region}</li>
                            <li><strong>Sub Region:</strong>{' '}{singleCountry.subregion}</li>
                            <li><strong>Capital:</strong>{' '}{singleCountry.capital}</li>
                            <li><strong>Border Countries:</strong>{' '}
                             {  
                             singleCountry.borders && singleCountry.borders.map(bc =>  {return <span className='border-countries'>{' '}{bc}</span>})
                            }
                            </li>
                        </ul>
                </div>

                <div className='list-2'>
                        <ul>
                            <li><strong>Top Level Domain:</strong>{' '}{
                                singleCountry.topLevelDomain && singleCountry.topLevelDomain.map(tld =>  {return <span>{' '}{tld}</span>})
                                }</li>
                            <li><strong>Currency:</strong>{' '}
                            {
                                singleCountry.currencies && singleCountry.currencies.map(c =>  {return <span>{' '}{c.code}</span>})
                                }
                                </li> 
                             <li><strong>Languages:</strong>{' '}
                             {
                                singleCountry.languages && singleCountry.languages.map(l => {return <span>{' '}{l.name}</span>})
                                }</li>
                        </ul>
                </div>
            </div>
             
                    
                        
                
        </div>
              
        </div>
          
        )
        
    );
}

export default SingleCountry