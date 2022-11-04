import React from 'react';

const Country = (props) => {
    const {name, flags} = props.country;
    return (
        <div>
            <h2>{name.common}</h2>
            <img src={flags.png} alt=""/>
        </div>
    );
};

export default Country;