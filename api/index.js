import express from "express";
import userRoutes from './routes/users.js'
import loginRoutes from './routes/login.js'
import listRoutes from './routes/list.js'
import cors from "cors";

const app = express()

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/list', listRoutes);

app.listen(8800);