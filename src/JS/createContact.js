import React from 'react'
import { hashHistory } from 'react-router'
import { createContact } from 'API/api'

export default React.createClass({
  getInitialState: function() {
        return {
          first: "",
          last: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          large: ""
    } 
    },

    update: function(e) {
      var obj = this.state;
      var id = e.target.id;

      obj[id] = e.target.value;
   
    
    this.setState(obj);
    },

    postToAPI: function() {
      var obj = {
          name: {
          first: this.state.first,
          last: this.state.last,  
          },
          phone: this.state.phone,
          email: this.state.email,
          location: {
          city: this.state.city,
          state: this.state.state
          },
          picture: {
          large: this.state.large
        }
      }
  
      createContact(obj).then(function(resp){
        hashHistory.push('/')
      })
    },

    render: function() {
    return (
      <form className="form">
        <div id="listHeader">New Contact Form</div>
        <input className="formInput" id="first" onChange={this.update} type="text" placeholder="First Name"></input>
        <input className="formInput" id="last" onChange={this.update} type="text" placeholder="Last Name"></input>
        <input className="formInput" id="email" onChange={this.update} type="text" placeholder="Email"></input>
        <input className="formInput" id="phone" onChange={this.update} type="text" placeholder="Phone"></input>
        <input className="formInput" id="city" onChange={this.update} type="text" placeholder="City"></input>
        <input className="formInput" id="state" onChange={this.update} type="text" placeholder="State"></input>
        <input className="formInput" id="large" onChange={this.update} type="file"></input>
        
        <div className="createButtonDiv"> 
          <button className="createButton" onClick={this.postToAPI}>Create New Contact</button>
        </div>  
      </form>
    )
  }
})



// <input value={this.state.lname} onChange={this.update} type="text"></input>
