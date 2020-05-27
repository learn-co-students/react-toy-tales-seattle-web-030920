import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const { toys, onDonateToy, onLikeToy} = props

  const renderToys = () => {
    return toys.map(toy => {
      return <ToyCard toy={toy} key={toy.id} onDonateToy={onDonateToy} onLikeToy={onLikeToy}/>
    })
  }

  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
