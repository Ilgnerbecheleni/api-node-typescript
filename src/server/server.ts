
import express, { Request, Response } from 'express';
import { router } from '../routes';


const server = express();
server.use(express.json());
server.use(router);

export { server };
