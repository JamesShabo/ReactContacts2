import React from 'react'
import { Link } from 'react-router';
import contactList from '../JS/contactsList'
import people from '../JS/Contacts'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>App: Home</h1>
        <ContactsList />
      </div>
    )
  }
})
