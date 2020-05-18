import React, { Component } from 'react';

class ToyCard extends Component {
 
  // handle click here
  handleLike = () => { 
    this.props.onLike(this.props.toy)
  }

  handleDonate = () => {
    this.props.onDonate(this.props.toy)
  }

  render() {
    const {name, likes, img } = this.props.toy;
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={img} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
