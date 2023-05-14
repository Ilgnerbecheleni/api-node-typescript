import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/home', (_: Request, res: Response) => {
  res.send({ api: 'API V 1.0.0' });
});

router.post('/:id', (req: Request, res: Response) => {
  const { nome } = req.body;
  const { id } = req.params;
  res.status(StatusCodes.ACCEPTED).json({ id: id, nome: nome });
});


export { router };
