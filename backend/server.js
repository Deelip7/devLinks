//Entry Point for the server for the back-end
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import linkRoutes from './routers/linkRoutes.js';

//loads environment variables from .env
dotenv.config();
//Connect to mongoDB
connectDB();

//app object by calling express()
const app = express();

const PORT = process.env.PORT || 5000;

//built-in middleware to recognize the incoming Request Object as a JSON Object
app.use(express.json());

app.use('/api/links', linkRoutes);

app.listen(PORT, console.log(`Server run on port ${PORT}`));
