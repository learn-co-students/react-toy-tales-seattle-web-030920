import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys, likeToy,donateToy}) => {

 const renderToys=()=>{
    return toys.map(toy=>{
    return <ToyCard toy={toy} key={toy.id} likeToy={likeToy} donateToy={donateToy}/>})
  }

  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
