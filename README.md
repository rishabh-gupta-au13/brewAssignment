# Node.js CRUD Operation Project

This project demonstrates basic CRUD operations such as adding ,deleting ,updating and creating the books using Node.js and a database (MongoDB in this example).

## Getting Started
- Node.js installed on your machine
-Pass the mongodb url in .env file and PORT also 


### Installing Dependencies
npm install
=>If you are running in development- npm run dev
=>If you are running in production -npm run start 

### API Endpoints


### Create Books
URL: api/v1/books/
Method: POST
Note-Title Should Be Unique;
{
    "author":"Jk Rowlingg", 
    "title":"Test123345",
    "description":"This is Very Good Book"
}

### Read All Books
URL: /api/v1/books
Method: GET
Note-It Will Give You all the books available .


### Get Book By Title
URL: api/v1/books?title=Test1
Method: GET
Note -Title of books should be passed because it is unique

### Update Book By Title
URL:/api/v1/books?title=Test2
Method -Patch
Note-Title Should be passed as query parameter and updated field in req.body 

{
    "author":"testing author",
    "description":"this is update. operation"
}
### Delete Book By Title
URL:/api/v1/books?title=Test2
Method -Delete

Post Man Collection-https://api.postman.com/collections/23325662-651d4c92-d9ab-4ae8-bb45-690c8d334f21?access_key=PMAT-01HESMKQH4T826H3VBN65GZ9RQ

















