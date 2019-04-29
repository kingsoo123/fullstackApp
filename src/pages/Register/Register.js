import React, {Component} from 'react';
import axios from 'axios';
import './register.css'

export default class Register extends Component{
constructor(props){
    super(props);
    this.state = {
        first_name: "",
        last_name:"",
        age:"",
        gender:"",
        level:"",
        email:"",
        password:""
    }

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
}

onChange(e){
    this.setState({[e.target.name]: e.target.value});
}

isFormValid = ()=>{
    const requiredField = ["first_name", "last_name", "gender","level","email","password"];
    let emptyField = 0;

    requiredField.forEach(field=>{
        if(this.state[field] === "") return ++emptyField; 
    })
    
    return emptyField > 0 ? true : false;
}
 async submitForm(){
if(this.isFormValid()) return;

    try {
        const res = await axios("http://localhost:2004/teachers/", this.state);
        console.log(res);
    } catch (error) {
        console.log("there was an error", error.response);
        
    }
     
 }

    render(){
        return(
          <div className="register">
                <input type="text" name="first_name" placeholder="First name" onChange={this.onChange}/>
                <input type="text" name="last_name" placeholder="Last name" onChange={this.onChange}/>
                <input type="text" name="age" placeholder="Age" onChange={this.onChange}/>
                <select name="gender" onChange={this.onChange}>
                <option value="gender">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="text" name="level" placeholder="Level" onChange={this.onChange}/>
                <input type="email" name="email" placeholder="Email" onChange={this.onChange}/>
                <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                <input type="submit" value="Register" disabled = {this.isFormValid()} onClick={this.submitForm}/>
          </div>
            
        );
    }
}