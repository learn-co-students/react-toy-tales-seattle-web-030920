import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys, onLike, onDelete}) => {
  let makeToys=(toys)=>{
    return toys.map(currentToy=> <ToyCard key={currentToy.id} toy={currentToy} onLike={onLike} onDelete={onDelete}/>)
  }

  return(
    <div id="toy-collection">
      {makeToys(toys)}
    </div>
  );
}

export default ToyContainer;
