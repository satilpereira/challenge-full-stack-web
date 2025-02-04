import e, { Request, Response } from 'express';
import HttpStatusCode from '../../constants/HttpStatusCode';
import Logger from '@helpers/terminal/Logger';

const log = new Logger();

class ResponseHandler {
  /**
   * Handles the response for the API request.
   *
   * @param req - The request object.
   * @param res - The response object.
   */
  static handle(req: Request, res: Response) {
    log.group('ResponseHandler');
    if (!req.status) {
      // Status not found usually means that the route is not implemented
      log.warn(
        `Status not found in response object. Route ${req.originalUrl} is probably not implemented`
      );
      log.groupEnd();
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({
        error: 'ERROR_NOT_IMPLEMENTED',
        message: 'O recurso solicitado não existe ou não foi implementado.',
        details: {
          route: req.originalUrl,
          description: 'Rota não implementada ou não existente',
        },
      });
      return;
    }
    if (req.body.authorization) {
      log.info(`There is a header, authorization: ${req.body.authorization}`);
      res.header('Authorization', `Bearer ${req.body.authorization}`);
      res.status(req.status).send({
        message: req.message,
        payload: req.payload,
      });
      log.groupEnd();
      return;
    }
    if (req.status >= 400) {
      log.warn(req.status);
      log.warn(req.details);
      log.groupEnd();

      res.status(req.status).send({
        error: req.error,
        message: req.message,
        details: req.details,
      });
    } else {
      log.success(req.status);
      log.groupEnd();

      res.status(req.status).send({
        message: req.message,
        details: req.details,
        payload: req.payload,
      });
    }
  }
}
export default ResponseHandler;
