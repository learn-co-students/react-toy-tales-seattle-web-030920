import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
      
    })
  }

  handleLike = (likedToy) => {
    this.setState(prev => {
      return {
        toys: prev.toys.filter(toy => {
          return toy.id !== likedToy.id ? toy : {...toy, likes: toy.likes +=1}
        })
      }
    })
  }

  handleDonate = (donatedToy) => {
    this.setState(prev => {
      return {
        toys: prev.toys.filter(toy => {
          return toy.id !== donatedToy.id ? toy : null
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
          <ToyForm />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer allToys={this.state.toys} donate={this.handleDonate} like={this.handleLike}/>
      </>
    );
  }

}

export default App;
