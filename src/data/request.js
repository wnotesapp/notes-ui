const fetch = require('isomorphic-fetch');

function handleErrors(response) {
  if (!response.ok) {
    throw Error("Fetch error: " + response.statusText);
  }
  return response;
}

function parseJSON(response) {
  return response.json();
}

function get(url) {
  return fetch(url, {
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

function post(data, url) {
  return fetch(url, {
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

function put(data, url) {
  return fetch(url, {
    method: 'PUT',
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

export { get, post, put };
