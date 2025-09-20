import React, { useState } from 'react';
import './Country.css'



const Country = ({country}) => {
  //  console.log(country.area);
    const [visited, setVisited] = useState(false);
    const counrtyVisite =()=>{
    // * baick way example 
     // if(visited === false){
     //   setVisited(true)
     // }
     // else{
     //   setVisited(false)
     // }

    //  ** ternary way
    // setVisited(visited? false:true)

    //  *** exchage way
    setVisited(!visited)
}
  return (
    <div className={`counrty ${visited && 'counrty-visited'}`}>
      <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
       <h2>Name:{country.name.common}</h2>
       <h4>Official Name:{country.name.official}</h4>
       <p>Populaion:{country.population.population}</p>
       <h3>Capital:{country.capital.capital}</h3>
       <h4>Area: {country.area.area} {country.area.area > 300000?'(Big Country)':'(Small Counry)'}</h4>
       <button onClick={counrtyVisite}>
        {
          visited?'Visited':'Not Visited '
        }
       </button>

    </div>
  );
};

export default Country;