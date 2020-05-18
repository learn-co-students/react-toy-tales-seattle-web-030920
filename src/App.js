import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyList:data,
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean,

    })

  }
  addNewToy=({name,image,likes})=>{
    this.setState(prev=>{
      return{
        data:[...prev.data, {name,image,likes,id:prev.data.length+1}]
      }
    })
    this.handleClick()
  }
  likeToy=(theToy)=>{
      this.setState(prev=>{
        return{
          toyList:prev.toyList.map(toy=>{
            if(toy!==theToy){
              return toy
            }else{
               toy.likes= toy.likes+1
               return toy
            }
          
        })
      }
    })
  }

  donateToy=(theToy)=>{
    this.setState(prev=>{return{
      toyList: prev.toyList.filter(toy=>toy!==theToy)
    }})
  }
  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick} > Add a Toy </button>
        </div>
       
        <ToyContainer toys={this.state.toyList} likeToy={this.likeToy} donateToy={this.donateToy}/>
      </>
    );
  }

}

export default App;
