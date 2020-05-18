import React, { Component } from 'react';

class ToyCard extends Component {

  handleLike=()=>{
    const {id, likes}=this.props.toy
    this.props.onLike(id, likes)
  }

  handleDelete=()=>{
    this.props.onDelete(this.props.toy.id)
  }

  render() {
    const {name, image, likes}=this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
