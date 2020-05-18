import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys:[]
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch(" http://localhost:3000/toys").then(resp=> resp.json()).then(resp=>this.setState({toys:resp}))
  }

  onAddToy=(toyDetails)=>{
    fetch(" http://localhost:3000/toys", {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(toyDetails)})
    .then(res=>res.json())
    .then(toy=> this.setState({toys: [...this.state.toys, toy], display: false}))
  }

  onLike=(id, likes)=>{

    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({likes: likes+1})
    })
      .then(
        this.setState((prev)=>
          ({toys: prev.toys.map(toy=> {
              if (toy.id === id){
                toy.likes=toy.likes+1
              } 
            return toy
            })}
          )))
  }

  onDelete=(id)=>{
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE'})
      .then(
        this.setState((prev)=>
          ({toys: prev.toys.filter(toy=> toy.id !== id) })
          ))
  }

  render(){
    const {toys, display}=this.state
    return (
      <>
        <Header/>
        { display?<ToyForm onAddToy={this.onAddToy}/>:null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={toys} onLike={this.onLike} onDelete={this.onDelete}/>
      </>
    );
  }

}

export default App;
