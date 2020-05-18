import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyData: data,
    nextID: data.length + 1
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  likeToy = (thisToy) => {
    console.log(`Like Toy: ${thisToy.name}`)
    thisToy.likes += 1

    this.setState(previousState => { 
      return {toyData: previousState.toyData.map(toy => {
        if (toy.id === thisToy.id) { return thisToy}
        else {return toy}
      })}
    })
  }

  donateToy = (thisToy) => {
    console.log(`Donating Toy: ${thisToy.name}`)
    this.setState(previousState => {
      return {toyData: previousState.toyData.filter(toy => {
        if (toy.id !== thisToy.id) {return toy}
      })}
    })
  }

  createToy = (formInput) => {
    formInput.preventDefault()

    const {name, image} = formInput.target
    const newToy = {id:this.state.nextID, image:image.value, likes: 0, name: name.value}

    this.setState({toyData: [...this.state.toyData, newToy], nextID: this.state.nextID + 1})

    alert(`Added ${newToy.name}!`)
    formInput.target.reset()
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onAddToy={this.createToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}>{this.state.display? "Close" : "Open"} New Toy Form </button>
        </div>
        <ToyContainer toyData={this.state.toyData} onLikeToy={this.likeToy} onDonateToy={this.donateToy}/>
      </>
    );
  }

}

export default App;
