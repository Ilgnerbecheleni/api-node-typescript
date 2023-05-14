import express, { Request, Response } from 'express';

interface user {
    // eslint-disable-next-line linebreak-style

}
const server = express();
server.get('/', (_: Request, res: Response) => {
    res.send({ api: 'API V 1.0.0' });
});

export { server };