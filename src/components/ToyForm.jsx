import React, { Component } from 'react';

class ToyForm extends Component {
//   state = {
//     name: "",
//     image: ""
//   }

//   changeName = event => {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   changeImage = event => {
//     this.setState({
//       image: event.target.value
//     })
//   }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.props.onAddToy}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            // value={this.state.name}
            // onChange={this.changeName}
          />
          <br/>
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            // value={this.state.image}
            // onChange={this.changeImage}
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
