import './App.css';
import React from 'react'
import FeedbackForm from './Components/FeedbackForm'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      depart: '',
      rating:'',
      users:[]
    }
  }

  updateName = (event) => {
    this.setState({name: event.target.value});
  }

  updateDepartment = (event) => {
    this.setState({depart: event.target.value});
  }

  updateRating = (event) => {  
    this.setState({rating: event.target.value});
  }

  handleOnClick  = () => {
    const updatedUsers = this.state.users;

    updatedUsers.push({name:this.state.name, depart:this.state.depart, rating:this.state.rating})
    this.setState({users:updatedUsers, name:'', depart:'', rating:'' })
  }

  render() {
    return (
      
      <div>
      <button onClick={this.handleOnClick}> Submit </button>

        <FeedbackForm name={this.state.name} depart={this.state.depart} rating={this.state.rating} users={this.state.users} 
        updateName={this.updateName} updateDepartment={this.updateDepartment} updateRating={this.updateRating}/>
        
      </div>
    
    )
  }
}

export default App;
