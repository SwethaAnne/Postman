var axios = require('axios').default;
var host = 'http://localhost:3999';

async function login(username, password) {
    const url = host + '/user/login';
    return axios.post(url, {username, password})
}

async function register(username, email, password) {
    const url = host + '/user/create';
    axios.post(url, {username, email, password}).then(res => {
        console.log(res, 'created user');
        return res;
    }).catch(err => {
        console.log(err, 'err while creating user');
    })
}

module.exports = {
    login,
    register
}