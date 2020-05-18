import React from 'react';
import ToyCard from './ToyCard'


const renderToys = ({toyData, onLikeToy, onDonateToy}) => {
  return (toyData.map(toy => { return <ToyCard key={toy.id} toy={toy} onLikeToy={onLikeToy} onDonateToy={onDonateToy}/> })) 
}

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {renderToys(props)}
    </div>
  );
}

export default ToyContainer;
