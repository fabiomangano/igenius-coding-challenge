# igenius-project

A small backend for an online currency converter.  
For full description, take a look at *Backend_remote_exercise.pdf* contained within the ext folder.

## Getting Started

Clone repository:

```
git clone git@github.com:fabiomangano/igenius-project.git
```

### Prerequisites

To run the project you need to have [docker](https://www.docker.com/products/docker-desktop) installed.

### Running on local environment:

Run:
```
npm start
```

Pls stop and remove containers, before launch tests:
```
docker-compose down
```

To test that the APIs are working as expected, I suggest use [postman](https://www.getpostman.com/downloads/).
To inspect the db table, you can instead use [TablePlus](https://tableplus.com/download).  
Inside ext's folder, you will find a postman apis collection and a connection dump for tableplus (passw: 0000).
  
## Running the tests

Run test:
```
npm test
```
Pls stop and remove containers, before launch server:
```
docker-compose down
```
## Notes

The postaman apis collection reproduce a set of failure and success cases of the call to the convert endpoint.

## Built With

* [Node.js](https://nodejs.org/it/) - Open-source, cross-platform, JavaScript runtime environment.
* [Express.js](https://expressjs.com/it/) -  Web application framework for Node.js.
* [Sequelize](https://sequelize.org/) -  Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
* [PostgreSQL](https://www.postgresql.org/) -  A powerful, open source object-relational database system.

## Author

* **Fabio Mangano** 






