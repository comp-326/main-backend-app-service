# Exam backend app
###  Exam app setup with TS
Check the instructions below to setup your environment

Running project in dev mode
Install all the dependencies
```sh
$ npm install 
#or 
$ yarn 
```
#####
App domains
1. [x] Users
1. [x] Roles
1. [x] Students
1. [x] Lecturers
# Running the project
To set environment variables
Make sure to run this before you start development otherwise
the server won't start properly
```sh
$ npm run env 
# or 
$ yarn env
```
The above script command should populate the `.env` from the `.env.example` snapshot properly.

Check the `.env` file and fill the empty fields
This will setup the project in the most convenient way for all devs workflow

Once done run:
This is to run the development server
```sh
$ npm run dev
# or 
$ yarn dev
```
# Dev-Endpoints docs
To access the API docs head over to the `url` below
The deault port is `6200`
Navigate to 

`http://localhost:6200`
# Pre-Production
This is a pre-deployment script
Run
```sh
$ npm run build
# or 
$ yarn build
```
This will build the typescript project to js
Then...
```sh
$ npm start
# or 
$ yarn start
```

