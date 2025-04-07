import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 
import cors from 'cors';
import snippetRoutes from './routes/snippetRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/snippets', snippetRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.error(err));
