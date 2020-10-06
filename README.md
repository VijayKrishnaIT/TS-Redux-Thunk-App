## CRUD Operations

1.  Create MongoDB Atlas Database

    - MongoDB is the NoSQL DataBase.

    - MongoDB Supports JSON.

    - MongoDB is the light weight DataBase.

    - As a "MongoDB" Developer we can perform CRUD Operations on JSON.

    - MongoDB follows the "mongodb" protocol.

    - by default MongoDB running on port no.27017

    - MongoDB follows the "client server" architecture.

2.  create the application and link to reducer and server.

    > create-react-app thunk-app --template typescript

3.  switch to directory

    > cd thunk-app

4.  download the node modules

    => express

    => mongodb@2.2.32

    => body-parser

    => cors

    - express module used to develop the rest apis

            GET
            POST
            PUT
            DELETE

    - "mongodb@2.2.32" module used to interact with the "mongodb" database.

    - "body-parser" module used to read the "client data".

    - "cors" module used to enable the ports communication.

    > yarn add express mongodb@2.2.32 body-parser cors --save

5.  develop the rest apis by using NodeJS

---

server
fetch
fetch.js
insert
insert.js
update
update.js
delete
delete.js
server.js

---

    - "fetch.js" file ued to create the GET Request (get the data from employees collection)

    - "insert.js" file used to create the POST Request  (insert the data into employees collection)

    - "update.js" file used to create the PUT Request  (update the data present in "employees" collection)

    - "delete.js" file used to create the DELETE Request  (delete the data from "employees" collection)

    - "server.js" file used to collabrate the above modules.

6.  test the rest apis by using Postman

            => http://localhost:8080/fetch    (GET)

            => http://localhost:8080/insert   (POST)

            => http://localhost:8080/update   (PUT)

            => http://localhost:8080/delete   (DELETE)

## Integration of CRUD Operations to React Application

1. create the react application

> create-react-app thunk-app --template typescript

2. switch to thunk-app

> cd thunk-app

3.  download the node modules.

    => redux

    => react-redux

    => redux-thunk

    => axios

    => react-bootstrap

    => bootstrap

    - "redux" used to implement the "state management".

    - "react-redux" used to integrate the "redux" to "react" application.

    - "redux-thunk" used to separate and manage the actions.

            Ex.
                    FETCH
                    INSERT
                    UPDATE
                    DELETE

    - "axios" module used to make the rest api calls.

    - "react-bootstrap" & "bootstrap" used to implement add the styles to the components.

    > yarn add redux react-redux redux-thunk axios react-bootstrap bootstrap --save

4.  add the react-bootstrap CDN'S to the index.html file

     <script src="https://kit.fontawesome.com/a076d05399.js"></script>
     <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
             crossorigin></script>
     <link rel="stylesheet"
           href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>

5.  create the actions

---

mern-app
src
actions
actions.tsx

---

6. create the reducer

---

mern-app
src
reducer
reducer.tsx

---

7. create the store,deploy the reducer and make the availability to App Component

index.tsx

8. create the App Component

App.tsx
