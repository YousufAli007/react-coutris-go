import React, { use } from 'react';
import Country from '../country/Country';
import './Countris.css'
const Countris = ({countrisPromise}) => {
  const countrisData =use(countrisPromise)
  const countris = countrisData.countries
  // console.log(countris);
  
  return (
    <div>
       <h2>All Countris: {countris.length}</h2>
       <div  className='countris'>
        {
        countris.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
       }
       </div>
    </div>
  );
};

export default Countris;