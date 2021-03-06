# rehacked-spa-basics-api

## Intention
This repo is intended to be used as a starting point for node projects using Sails.

It has JWT authentication baked in and is ready to be expanded upon.

There is no heavy boilerplate code to remove.

## Demo
The API is deployed to Heroku via Codeship (Give me a minute to respond, I may be sleeping)

https://baseline-sails-api.herokuapp.com/

## Prerequisites

### NVM
- [Node Version Manager](https://github.com/creationix/nvm)

- Node 4.4.6 (using `nvm install 4.4.6`)

### Update [Homebrews](http://brew.sh/) package database
`brew update`

### Install the MongoDB Binaries
`brew install mongodb`

### Create the data directory in your preferred location
`mkdir -p /data/db`

## Usage

### Start a local Mongo instance (using your data directory from above)
`mongod --dbpath /data/db`

### Clone this repo
`git clone https://github.com/johnrhampton/baseline-sails.api.git`

### Start sails
`nvm use 4.4.6`

`npm install`

`npm start`

## Create a user using Postman
POST - http://localhost:1337/user

```javascript
  {
      "email": "yo@mtv.raps",
      "password": "bad-password"
  }
```

## Authenticate using Postman
POST - http://localhost:1337/user/login

```javascript
  {
      "email": "yo@mtv.raps",
      "password": "bad-password"
  }
```
