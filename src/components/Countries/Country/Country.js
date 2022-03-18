import React from 'react';
import './Country.css'


const Country = (props) => {
    const { area, population, name, region, flags } = props.country
    // console.log(props.country.area);
    // const { name, area, region, population, flags } = props.country
    return (
        <div className='country'>

            <img src={flags.png} alt="" />
            <h2>Name:{name.common}</h2>
            <h4>Region: {region}</h4>
            <p>Population: {population}</p>
            <h3><small>Area: {area}</small></h3>

        </div>
    );
};

export default Country;