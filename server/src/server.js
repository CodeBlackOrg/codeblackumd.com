const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT
const server = express()

const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = 'http://localhost:3000';
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

server.use(cors(corsOptions))

server.get('/', function(req, res){
    res.json("Code: Black's Server")
})