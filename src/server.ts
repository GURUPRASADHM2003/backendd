import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'
import { corsConfig } from './config/cors';
import { connectDB } from './config/db';
import projectRoutes from './routes/projectRoutes';

dotenv.config();
connectDB();

//Express initialize
const app = express();

//CORS config added
app.use(cors(corsConfig));

//Logging
app.use(morgan('dev'))

//Reading format fot JSON
app.use(express.json());

//Routes
app.use('/api/projects', projectRoutes)

export default app;