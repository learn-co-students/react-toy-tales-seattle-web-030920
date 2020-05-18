import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = props => {
  const renderToys = props => {
    const { allToys, onAddLike, onDeleteToy } = props
    return allToys.map(toy => <ToyCard key={toy.id} toy={toy} onAddLike={onAddLike} onDeleteToy={onDeleteToy} />)
  }

  return(
    <div id="toy-collection">
      {renderToys(props)}
    </div>
  );
}

export default ToyContainer;
