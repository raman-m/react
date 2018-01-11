const M_DATABASE = 'todos';
const API_BASE_URL = `https://api.mlab.com/api/1/databases/${M_DATABASE}/collections`;
const API_KEY = 'you-api-key-form-mlab';

const defaultOpts = {
  headers: {
    'Content-type': 'application/json'
  }
};

export function executeRequest(path, opts) {
  const acctualOpts = {...defaultOpts, ...opts};
  return fetch(`${API_BASE_URL}/${path}?apiKey=${API_KEY}`, acctualOpts)
    .then(res => res.json());
}
