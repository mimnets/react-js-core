import React, { useEffect, useState } from 'react';

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
        {
          countries.map(country => <Country name={country.name.common} flags={country.flags.png} region={country.region} subregion={country.subregion}></Country>)
        }
      </div>
    )
  }
//Countries  
function Country(props){
  return(
    <div>
      <h4>Country Name: {props.name}</h4>
      <img src={props.flags} alt=""/>
      <p>Region: {props.region}</p>
      <p>Sub Region: {props.subregion}</p>

    </div>
  )
}

export default Countries;