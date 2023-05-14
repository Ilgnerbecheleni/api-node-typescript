import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';
const router = Router();


//home
router.get('/home', (_: Request, res: Response) => {
  res.send({ api: 'API V 1.0.0' });
});

//cidades
router.post('/cidades', CidadesController.create);


//pessoas







export { router };
