require('es6-promise').polyfill();
import 'isomorphic-fetch';

import config from '../config';

function handleErrors(response) {
  if (!response.ok) {
    throw Error("Fetch error: " + response.statusText);
  }
  return response;
}

function parseJSON(response) {
  return response.json();
}

function getNotes() {
  return fetch(config.apiUrl + config.notesPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
  }).then(handleErrors)
    .then(parseJSON)
    .then((data) => {
      return data;
    }).catch(error => {
      console.log(error.message);
    });
}

function addNote(data) {
  return fetch(config.apiUrl + config.notesPath, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleErrors)
    .then(parseJSON)
    .then(data => {
      return data;
    }).catch(error => {
      console.log(error.message);
    });
}

export { addNote, getNotes };
