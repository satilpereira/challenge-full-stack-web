import { Request, Response, NextFunction } from 'express';

export type ExpressControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
