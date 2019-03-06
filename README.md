# FasterWeb-API

## Prerequisites
1. Install nodejs and npm (Node Package Manager)
    ```
    sudo apt update
    sudo apt install nodejs
    ```
2. Install MongoDB
    ```
    sudo apt update
    sudo apt install mongodb
    ```
3. Clone this repository
    ``` 
    git clone https://github.com/davidjeyachandran/node-mongo-boilerplate.git
    ```
    Note: For this step you need to install **git**
    ```
    sudo apt install git
    ```

## node-mongo-boilerplate

1. Go to project folder
    ```
    cd node-mongo-boilerplate
    ```
2. Inicialize npm
    ```
    npm init -y
    ```

3. Configure database connection credentials in `config/db.js`

    ```
    const user = '<your-user>';
    const password = '<your-password>';
    const name = '<your-database-name>';
    const url = 'mongodb://' + user + ':'+ password + '@ds123625.mlab.com:23625/' + name;

    module.exports = { url: url, name: name}
    ```
    for example:
    ```
    const user = 'admin';
    const password = 'thebestpassword';
    const name = 'test-project';
    const url = 'mongodb://' + user + ':'+ password + '@ds123625.mlab.com:23625/' + name;

    module.exports = { url: url, name: name}
    ```
    The variables `user`, `password` and `name` are your  MongoDB's username, password and database name.

4. Run the application
    ```
    npm run dev
    ```