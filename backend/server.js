import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import ticketRoute from './routes/ticketRoute.js';
import techPeopleRoute from './routes/techPeopleRoute.js'
import imageRoute from './routes/imageRoute.js'

const app = express();
dotenv.config();  

connectDB();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.use('/api',cors(), ticketRoute);
app.use('/api',cors(), techPeopleRoute);
app.use('/image',cors(), imageRoute)


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
