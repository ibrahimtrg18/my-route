# my-route-backend

[Stack](#Stack)\
[Installation](#Installation)\
[Usage](#Usage)\
[LIST API](#list-api)\
[REST API](#rest-api)

## Stack

- [Node.js](https://nodejs.org/en/)
- client
  - [react](https://www.npmjs.com/package/react)
  - [react-router-dom](https://www.npmjs.com/package/react-loader-spinner)
  - [styled-components](https://www.npmjs.com/package/styled-components)
  - [axios](https://www.npmjs.com/package/axios)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [formik](https://www.npmjs.com/package/formik)
  - [yup](https://www.npmjs.com/package/yup)
  - [react-datepicker](https://www.npmjs.com/package/react-datepicker)
  - [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- server
  - [express](https://www.npmjs.com/package/express)
  - [mysql](https://www.npmjs.com/package/mysql)
  - [knex](https://www.npmjs.com/package/knex)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [validator](https://www.npmjs.com/package/validator)
  - [dotenv](https://www.npmjs.com/package/dotenv)

## Installation

> you must install node.js v12.18.0 and npm v6.14.0

```
$ git clone https://github.com/ibrahimtrg18/my-route.git
$ cd client
$ npm install
> cd ..
$ cd server
$ npm install
```

### Usage

for client `npm start`\
for server `npm start`

### LIST API
> localhost:4000

| PATH                  | Method | Description                                       |
| --------------------- | :----: | ------------------------------------------------- |
| /api/employee/login   |  POST  | url path employee/courier for submit login        |
| /api/employee/profile |  GET   | url path employee/courier for get data profile    |
| /api/employee/profile |  PUT   | url path employee/courier for submit edit profile |

## REST API
GET `http://localhost:4000/api/employee/login`
```
curl -i -X POST http://localhost:4000/api/employee/login
    -H "Content-Type: application/json"
    -H "Accept: application/json"
    -d "{\"email\":\"example@example.example\",\"password\":\"example\"}"
```
```
HTTP/1.1 200 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "code":200,
    "success":true,
    "data":{
        accessToken: "xxx"
    }
    "message":"Successfully login!"
}
```

GET `http://localhost:4000/api/employee/profile`
```
curl -i -X GET http://localhost:4000/api/employee/profile 
    -H "x-token: xxx"
```
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "code":200,
    "success":true,
    "data":{
        "employee":{
            "id":5,
            "name":"asd",
            "custom_id":"asd123",
            "email":"asd@asd.asd",
            "password":"asd",
            "phone_number":"081298765432",
            "address":"asd",
            "status":0,
            "total_route":0,
            "total_distance":0,
            "created_at":"2020-07-18T07:23:36.000Z",
            "updated_at":"2020-07-18T07:23:36.000Z"
            }
        },
    "message":"found the account"
}
```

PUT `http://localhost:4000/api/employee/profile`
```
curl -i -X PUT http://localhost:4000/api/employee/profile 
    -H "Content-Type: application/json" 
    -H "x-token: xxx" 
    -d "{\"name\":"zxc",\"phoneNumber\":\"000209323\",\"address\":\"asdasdsasd\"}"
```
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "code":200,
    "success":true,
    "message":"successfully update profile"
}
```