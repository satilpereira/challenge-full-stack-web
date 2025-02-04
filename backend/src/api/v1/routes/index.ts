import { Request, Response } from 'express';
import ResponseHandler from '@middlewares/ResponseHandler';
import { studentsRouter } from '@routes/studentsRouter';

import serverV1 from '@server';

export const routesExec = () => {
  serverV1.use('/api/v1/students', studentsRouter);

  // Redirect the root route to the /doc route
  serverV1.get('/', (req: Request, res: Response) => {
    // #swagger.ignore = true
    res.redirect('/doc');
  });

  // Use the ResponseHandler middleware except for the /doc route
  serverV1.use((req: Request, res: Response, next) => {
    if (req.path === '/doc' || req.path === '/doc/' || req.path === '/') {
      next();
    } else {
      ResponseHandler.handle(req, res);
    }
  });
};
