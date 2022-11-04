import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
  
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])
  
    return(
      <div>
        <h1>RESTful Countries</h1>
        <h4>Countries: {countries.length}</h4>
        <div className='countries-container'>
          {
            countries.map(country => <Country 
              country = {country}
              key={country.cca3}
              // name={country.name.common}
              // flag={country.flags}

              ></Country>)
          }
        </div>
      </div>
    )
  }
// //Countries  
// function Country(props){
//   return(
//     <div>
//       <h4>Country Name: {props.name}</h4>
//       <img src={props.flags} alt=""/>
//       <p>Region: {props.region}</p>
//       <p>Sub Region: {props.subregion}</p>

//     </div>
//   )
// }

export default Countries;