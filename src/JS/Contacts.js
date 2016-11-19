import React from 'react';
import { Link } from 'react-router';
import { getContacts, deleteContact, createContact } from 'API/api'

const ContactListContainer = React.createClass({
  getInitialState: function() {
        return {
            Contacts: []
        }
    },

    componentWillMount: function() {
       this.rerender() 
    },  

    rerender: function() {
        getContacts().then(resp =>  {
            this.setState({
                Contacts: resp.data
            })
        })
    },

    render: function() {
  
    return (
            <ContactList rerender={this.rerender} contacts={this.state.Contacts} />
    )
  }
})


const ContactList = React.createClass({
    deleteContact: function(e) {
        var id = e.target.id.substr(1)

        deleteContact(id).then(resp => {
            this.props.rerender()
        })
    },

    render: function() {
        return (
            <div>
                <div id="listHeader">My Contacts</div>
                <div id="listContainer">
                    {this.props.contacts.map(item => {
                        return (
                            <div key={item.id} className="listItem">
                                <img className="avatar" src={item.picture.thumbnail}/>
                                <Link to={"/contact/" + item.id} className="listName">{item.name.first + " " + item.name.last}</Link>
                                <button className="delButton" id={`d${item.id}`} onClick={this.deleteContact}>Delete</button>
                            </div>
                        )
                    })}   
                </div>
                <div className="createButtonDiv">
                    <Link to="/contactForm/">
                        <button className="createButton">Create Contact</button>
                    </Link>
                </div>
            </div>
        )
    }
})

export default ContactListContainer 

