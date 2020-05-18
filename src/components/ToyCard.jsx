import React, { Component } from 'react';

class ToyCard extends Component {
  render() {
    const { toy, onAddLike, onDeleteToy } = this.props
    const { image, name, likes } = toy

    return (
      <div className="card">
        <h2>{name/* Toy's Name */}</h2>
        <img src={image/* Toy's Image */} alt={name/* Toy's Name */} className="toy-avatar" />
        <p>{likes/* Toy's Likes */} Likes </p>
        <button className="like-btn" onClick={() => onAddLike(toy)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => onDeleteToy(toy)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
