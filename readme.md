# Deux 
> Deux was developed to be a custom solution for compiling C++ code on an external server, providing command line feedback in real-time whilst monitoring file changes and automatically (re)compiling. 

Developed with bare simplicity in mind, Deux provides a build server system for C++ that monitors a target folder, automatically compiling when it detects any changes and executes compiled programs to provide you real-time feedback through the command line to assist in rapid development.

Real-time feedback is only provided through the command line in which Deux was executed from. It's worth noting that deux was developed as a custom solution for my personal needs, not as a public tool; the codebase however, may be of use to others.

## Requirements

* CentOS 7 
* NodeJS 8.6.0
* G++ 
* Nodemon (NPM)

## Getting started

Install all dependencies:  

```
npm install -y 
```

Execute Deux with a c++ file: 

```
nodemon deux.js -s example.cpp 
```

Deux output: 

```
[root@local deux]# nodemon --watch ./build/* app.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: ./build/example.cpp
[nodemon] starting `node app.js`
OBJECT BUILDING: [OK]
EXECUTABLE BUILDING: [OK]
<=== COMPILED C++ EXECUTABLE START ===>
Hello World!

<=== COMPILED C++ EXECUTABLE END ===>
[nodemon] clean exit - waiting for changes before restart
```

## Arguments

All arguments after `-s` are considered to be your project .cpp files. 

## Features

Coming soon.

## Errors

Coming soon.