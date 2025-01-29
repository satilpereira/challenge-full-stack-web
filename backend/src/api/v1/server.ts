import express, { Request, Response } from 'express';
import cors from 'cors';

const xss = require('xss-clean');

const serverV1 = express();

serverV1.use(express.json());

serverV1.use(cors());

serverV1.use(xss());

serverV1.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default serverV1;
