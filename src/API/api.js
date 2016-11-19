import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getContacts() {
  return axios.get("contacts")
}

export function getContact(id) {
  return axios.get(`contacts/${id}`)
}

export function deleteContact(id) {
  return axios.delete(`contacts/${id}`)
}

export function createContact(obj) {
  return axios.post("contacts", obj)
}
