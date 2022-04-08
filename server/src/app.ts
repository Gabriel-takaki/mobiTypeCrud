import express from 'express';
import userRouter from './routes/userRouter';
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.use('/users', userRouter);
export default app;
