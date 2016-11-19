import React from 'react'
import { Link } from 'react-router'
import { getContact } from 'API/api'
import styles from '../assets/styles/style.css'
require = '../assets/styles/font-awesome/css/font-awesome.css'


const ContactViewContainer = React.createClass({
  getInitialState: function() {
    return {
      img: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      city: "",
      state: ""
    } 
  },

  componentWillMount: function() {
    var id = this.props.params.id

    getContact(id).then(resp => {
      this.setState({
        img: resp.data.picture.large,
        first: resp.data.name.first,
        last: resp.data.name.last,
        email: resp.data.email,
        phone: resp.data.phone,
        city: resp.data.location.city,
        state: resp.data.location.state
      })
    })
  },

  render: function() {  

    return (
      <ContactView contact={this.state}/>
    )
  }
})

const ContactView = React.createClass({

  render: function() {
    return (
      <div>
        <div className="profileBanner">
          <img className="avatarBanner" src={this.props.contact.img}/>
          <Link to="/" className="noDecoration">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>  
        <div>
          <div className="listItem profileItem"><i className="fa fa-user faProfile" aria-hidden="true"></i>{this.props.contact.first + " " + this.props.contact.last}</div>
          <div className="listItem profileItem"><i className="fa fa-envelope faProfile" aria-hidden="true"></i>{this.props.contact.email}</div>
          <div className="listItem profileItem"><i className="fa fa-mobile faProfile" aria-hidden="true"></i>{this.props.contact.phone}</div>
          <div className="listItem profileItem"><i className="fa fa-globe faProfile" aria-hidden="true"></i>{this.props.contact.city + ", " + this.props.contact.state}</div>
        </div>
      </div>
    )   
  }
})

export default ContactViewContainer

