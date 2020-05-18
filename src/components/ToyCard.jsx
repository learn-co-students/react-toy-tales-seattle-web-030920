import React, { Component } from 'react';

class ToyCard extends Component {

  handleLikeToy = () => {
    const {toy, onLikeToy} = this.props
    onLikeToy(toy)
  }

  handleDonateToy = () => {
    const {toy, onDonateToy} = this.props
    onDonateToy(toy)
  }

  render() {
    const {toy} = this.props
    const {image, name, likes} = toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikeToy}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonateToy}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
