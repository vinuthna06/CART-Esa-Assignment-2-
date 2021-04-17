


# Esa-Assign2

The project basically is creating a simple online shopping cart platform int the form of microservices linked via apis made in Node.Js. The major roles are the products available and the user interacting with the microservices. 

This project has two microservices. The first microservice interacts with the user (assuming they have logged in and are valid users). The second microservice interacts with the people running the e-commerce site. They can add/update inventory as per the available stock.


## Basic api structure

DATABASES:<br>
1) User<br>
2) Products<br>
3) Cart<br>

API FOLDERS:<br>
1) controllers <br>
2) routes <br>
3) models <br>

server.js files to set up and run the server

```
~esa-assign2>tree --filelimit 6
..
├── README.md
├── product api
│   ├── api
│   │   ├── controllers
│   │   │   └── productController.js
│   │   ├── model
│   │   │   └── productModel.js
│   │   └── routes
│   │       └── productRoutes.js
│   ├── node_modules [149 entries exceeds filelimit, not opening dir]
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── productMicroservice.py
├── user api
│   ├── api
│   │   ├── controllers
│   │   │   ├── cartController.js
│   │   │   ├── productController.js
│   │   │   └── userController.js
│   │   ├── model
│   │   │   ├── cartModel.js
│   │   │   ├── productModel.js
│   │   │   └── userModel.js
│   │   └── routes
│   │       ├── cartRoutes.js
│   │       ├── productRoutes.js
│   │       └── userRoutes.js
│   ├── node_modules [214 entries exceeds filelimit, not opening dir]
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── userMicroservice.py


6 directories, 13 files
```


## Setting up

The node js code is designed to run in integration with a mongodb atlas server. Please head to the server.js file and add a connection string to connect to a mongo database.


### Installing

A step by step series of examples that tell you how to get the server and client running

Running the server

```
~CART-Esa-Assignment-2/userapi>npm start
```

Output :

```
> api-try@1.0.0 start ~\esa-assign2\user api
> nodemon server.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
shopping cart RESTful API server started on: 4000
Database Connected

```

new term:

```
~CART-Esa-Assignment-2/productapi>npm start
```
OUPUT: 

```
> product-api@1.0.0 start ~esa-assign2\product api
> nodemon server.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Product RESTful API server started on: 3000
```

Running the userMicroservice code -essentially acts as a client to the api

new term:

```
~CART-Esa-Assignment-2/>python userMicroservice.py
```

Running the productMicroservice code -essentially acts as a store attendent to the api

new term:

```
-CART-Esa-Assignment-2/>python productMicroservice.py
```
Note: the microservice.py files have their own instructions within the code. 

## Running the tests

The userMicroservice python script has a set of functions created and can be called by the user to view/add/ remove data at any instant. Modify the script to create flow of data and test the microservice. 

The productMicroservice python script (has no code yet but can me made using the requests module in python OR we can use apps such as postman to make restful requests) is used to add/update inventory.



