require("dotenv").config();
const { MongoClient } = require("mongodb");

let dbConnection;
const uri = process.env.MONGO_KEY;

const connectToDb = (cb) => {
  // MongoClient.connect("mongodb://localhost:27017/bookstore")
  MongoClient.connect(uri)
    .then((client) => {
      console.log("connected to the db");
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => dbConnection;

module.exports = { connectToDb, getDb };
