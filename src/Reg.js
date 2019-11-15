import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire'
//import { AngularFireDatabase } from 'angularfire2/database';
//import Fire from './fire';
function Reg() {

  const constructor = () => {
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

function vk(){
  console.log("yups");


}

function handleSubmit() {
  //e.preventDefault();
  const itemsRef = fire.database.ref('testing');
  const item = {
    title: this.state.currentItem,
    user: this.state.username
  }
  itemsRef.push(item);
  this.setState({
    currentItem: '',
    username: ''
  });
}

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit()}>
        <input type="text" placeholder="enter first name" name="f_name"/><br/>
        <input type="text" placeholder="enter last name" name="l_name"/><br/>
        <input type="text" placeholder="enter city" name="city"/><br/>
        <input type="text" placeholder="enter age" name="age"/><br/>
        <input type="submit" name="submit" value="submit"/>
        </form>
      </header>
    </div>
  );


}


export default Reg;
