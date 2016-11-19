//React requirements
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, hashHistory } from 'react-router'
//CSS styles
require = 'assets/styles/styles.css'
//Componenets
import Layout from 'layouts/layout.js'
import Contacts from 'JS/Contacts'
import contactsList from 'JS/contactsList'
import Form from 'JS/createContact'
//React Routers

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Layout} >
      <Route path="/" component={Contacts} />
      <Route path="/contact/:id" component={contactsList} />
      <Route path="/contactForm/" component={Form}/>
    </Route>
  </Router>), document.getElementById("app"))