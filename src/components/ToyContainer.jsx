import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const renderToys = () => {
    
    const {toyList, donateToy, addLike} = props 
    return toyList.map(toy => <ToyCard key={toy.id} toyInfo={toy} donateToy={donateToy} addLike={addLike}/>)
  }
  

  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
} 

export default ToyContainer;
