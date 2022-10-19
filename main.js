const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1"
const serverUrl = 'https://rest-user-crud-backend-forked.onrender.com';
const baseUrl = isLocalhost ? 'http://localhost:3000' : serverUrl;

fetch(`${baseUrl}/users`)
    .then(resp => resp.json())
    .then(data => console.log(data));