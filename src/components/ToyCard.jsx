import React, { Component } from 'react';

class ToyCard extends Component {
  handleAddLikes=()=>{
   return this.props.likeToy(this.props.toy)
  }
  handleDonate=()=>{
    return this.props.donateToy(this.props.toy)
  }
  render() {
    const {toy,modifyToy} = this.props
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleAddLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
