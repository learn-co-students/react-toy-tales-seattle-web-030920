import React, { Component } from 'react';

class ToyCard extends Component {

  handleDonate = () => {
    const {donateToy, toyInfo} = this.props 
    donateToy(toyInfo)
  }
  
  handleAddLike = () => {
    const {addLike, toyInfo} = this.props 
    addLike(toyInfo)
  }
  
  
  render() {
    const {toyInfo} = this.props
    const {id, name, image, likes} = toyInfo
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleAddLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }
 
}

export default ToyCard;
