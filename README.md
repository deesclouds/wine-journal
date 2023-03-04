# REST API
A REST API for a wine application. 
Like to create, read, update and delete wine so users (wine lovers) come up with their favorite wines and maintain them inside a single application.

## Technologies:
Javascript
Node.js
Express.js
Backend Architecture
- JSON file as our database


## Architecture:

3 Layer Architecture

Request > Router > Controller > Service Layer > Data Access Layer
Response > Data Access Layer > Service Layer > Controller > Router

Controller: all stuff HTTP > dealing with requests and responses from our endpoints
Router: passes requests to the corresponding controller from Express
Service Layer: exports methods used by the controller
Data Access Layer: works with our Database. Exporting some methods for certain database operations  like creating our favorite wine list that can be used by our Service Layer. 

## Optimizations:
updating JSON file from being used as a database to using something like MongoDB or PostgreSQL

## Setup:

Folder Structure:

project Folder is wine-journal

src Folder holds all of our source files

src/v1: holds all the files for version 1 of the API

sub folders: controllers, services, database and routes

entry point to our API: index.js

create package.json file: ```npm init -y```

## Install dependencies:
```npm i -D nodemon```

```npm i express```

## Configure Express:

`const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// For testing purposes:
app.get('/', (req, res) => {
    res.send("<h2>It's Working</h2>")
})

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})`

## Add dev to package.json: 
 Add this line to scripts
 ```"dev": "nodemon src/index.js"```

 # Versioning:

Pros of versioning allows us to work on new features or improvements while the clients are still using the current version without breaking, clients aren't forced to use the new version immediately, can use the current version and migrate o their own when the new version is stable.

The two versions can run parallel without affecting each other.

// Version 1
"/api/v1/wine-journal"

// Version 2
"/api/v2/wine-journal"