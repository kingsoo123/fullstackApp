import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      teachers: []
    }
  }

  async componentDidMount(){

    try {
      const teachers = await fetch("http://localhost:2004/teachers/");
     
      const data = await teachers.json();
      console.log(data.data);
      this.setState({teachers: data.data});

    } catch (err) {
      console.log(err);
    }
    
  }

 
  render() {
    return (
      <div className="App">
        {this.state.loading ? "Loading" : this.state.teachers.map((teacher, id)=>{
          return <div key={teacher._id}>Name: {teacher.first_name}</div>;
        })}
      
      </div>
    );
  }
}

export default App;
