import express, { Request, Response } from 'express';
import cors from 'cors';
import Database from '@configs/Database';

const xss = require('xss-clean');

const serverV1 = express();

serverV1.use(express.json());

serverV1.use(cors());

serverV1.use(xss());

serverV1.get('/', async (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default serverV1;
