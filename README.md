# FasterWeb-API
# node-mongo-boilerplate

To install add a file config/db.js
const user = <user>;
const password = <password>;
const name = '<database-name>';
const url = 'mongodb://' + user + ':' + password + '@<connect string>' + name;

module.exports = {url: url, name: name}

