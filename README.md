# baseline-sails.api

## Intention
This repo is intended to be used as a starting point for node projects. It has JWT authentication baked in and is ready to be expanded upon.

There is no heavy boilerplate code to remove.  This is my starting point for node projects using sails.

## Prerequisites

### NVM
1. [Node Version Manager](https://github.com/creationix/nvm)
2. Node 4.4.4 (using `nvm install 4.4.4`)

### Update [Homebrews](http://brew.sh/) package database
$ brew update

### Install the MongoDB Binaries
$ brew install mongodb

### Create the data directory in your preferred location
$ mkdir -p /data/db

## Usage

### Start a local Mongo instance (using your data directory from above)
`mongod --dbpath /data/db`
