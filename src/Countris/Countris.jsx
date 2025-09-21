import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countris.css'
const Countris = ({countrisPromise}) => {
  const countrisData =use(countrisPromise)
  const countris = countrisData.countries
  // console.log(countris);
  const [visitedCountris, setVisitedCountirs]=useState([])
  const handalerVisited =(country)=>{
      const showVisited =[...visitedCountris,country];
       setVisitedCountirs(showVisited)
      //  console.log(visitedCountris)
  }
  const [visitedFalgs,setVisitedFlags]=useState([]);
  const handalerVisitedFlags=(flag)=>{
     const visitedFlag =[...visitedFalgs,flag];
     setVisitedFlags(visitedFlag)
  }
  return (
    <div>
       <h2>All Countris: {countris.length}</h2>
       <h2>My Family Visited Countirs: {visitedCountris.length}</h2>
       <ul>
        {
          visitedCountris.map(visitedCounry => <li key={visitedCounry.cca3.cca3} >{visitedCounry.name.common }</li>)
        }
       </ul>
       <h2>My total Visited Flags: {visitedFalgs.length}</h2>
       <ul className='visited-flags'>
        {
          visitedFalgs.map((flags,index) => <img key={index} src={flags}></img>)
        }
       </ul>
       <div  className='countris'>
        {
        countris.map(country => <Country
        handalerVisitedFlags={handalerVisitedFlags}
          handalerVisited={handalerVisited}
           key={country.cca3.cca3}
            country={country}></Country>)
       }
       </div>
    </div>
  );
};

export default Countris;