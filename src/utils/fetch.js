import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

function doFetch(url, { method, body } = {}) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: method || 'get',
    credentials: 'same-origin'
  };

  if (body) options.body = JSON.stringify(body);
  return fetch(url, options)
    .then(checkStatus)
    .then(response => response.json());
}

export default doFetch;
