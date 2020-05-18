import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'
const URL = "http://localhost:3000/toys"

class App extends React.Component{

  state = {
    display: false,
    toys: [],
    nextId: 0
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(toys => {
      this.setState({
        toys: toys,
        nextId: toys.length + 1
      })
    })
  }

  addLike = likedToy => {
    this.setState(prev => {
      return {
        toys: prev.toys.map(toy => {
          if (toy === likedToy) {
            toy.likes = toy.likes + 1
          }
          return toy
        })
      }
    })
  }

  addToy = event => {
    event.preventDefault()
    this.setState({
        toys: [...this.state.toys, {
          id: this.state.nextId,
          name: event.target.name.value,
          image: event.target.image.value,
          likes: 0
        }],
        nextId: this.state.nextId + 1
    })
    document.querySelector("form").reset()
  }

  // addToy = newToy => {
  //   this.setState(prev => {
  //     return {
  //       toys: [...prev.toys, newToy]
  //     }
  //   })
  // }

  deleteToy = selectedToy => {
    this.setState(prev => {
      return {
        toys: prev.toys.filter(toy => {
          return toy !== selectedToy
        })
      }
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onAddToy={this.addToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer allToys={this.state.toys} onAddLike={this.addLike} onDeleteToy={this.deleteToy} />
      </>
    );
  }

}

export default App;
