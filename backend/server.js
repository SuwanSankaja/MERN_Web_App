import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:' + PORT);
});

app.get('/products', (req, res) => {

});