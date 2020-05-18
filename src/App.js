import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyList: []
  }

  componentDidMount(){
    this.setState({toyList: data})
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitToy = (toyData) => {
    console.log(toyData, 'in submit toy in app')
    fetch(`http://localhost:3000/toys`, {
      method: 'POST',
      headers: {'Content-Type': `application/json`},
      body: JSON.stringify(toyData)
    })
    .then(res => res.json())
    .then(toy => {
      this.setState(prev => ({
        toyList: [...prev.toyList, toy],
        display: false
      }))
    })
  }

  donateToy = (toyData) => {
    fetch(`http://localhost:3000/toys/${toyData.id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(this.setState(prev => ({toyList: prev.toyList.filter(toy => toy.id != toyData.id)})))
  }

  addLike = (toyData) => {
    this.setState(prev => {
      return {
        toyList: prev.toyList.map(toy => {
          if (toy.id === toyData.id){
            toy.likes += 1
          }
          return toy 
        })
      }
    })
  }
   
  
  

  render(){
    const {toyList} = this.state
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onSubmitToy={this.submitToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyList={toyList} donateToy={this.donateToy} addLike={this.addLike}/>
      </>
    );
  }

}

export default App;
