import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt=""/>
        </div>
    );
};

export default Country;