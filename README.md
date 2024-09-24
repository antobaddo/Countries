# COUNTRIES
A simple app to track the trips you've taken around the world. With this app, you can record all the countries you've visited in your lifetime and add notes about past or upcoming trips.

## GETTING STARTED

- Use the correct Node.js and Npm version
  ```bash
  nvm use
  ```
- Install packages
  ```bash
  npm install
  ```
- Install json-server
  ```bash
  npm install -g json-server
  ```
- Start the json-server and configure the database
  ```bash
  json-server --watch src/db.json --port 3001
  ```
  or if you prefer, use an already initialized database
  ```bash
  json-server --watch src/db_initialized.json --port 3001
  ```

- Execute app in dev mode
  ```bash
  npm run start
  ```
  
### CREDITS
Countries data come from https://restcountries.com/