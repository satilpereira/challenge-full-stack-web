import { StudentsModel } from '@models/StudentsModel';
import '@models/StudentsModel/methods';
import { ExpressControllerFunction } from '@controllers/types';
import HttpStatusCode from '@constants/HttpStatusCode';
import ResponseHelper from '@helpers/ResponseHelper';

const studentsModel = new StudentsModel();

export const createStudent: ExpressControllerFunction = async (
  req,
  res,
  next
) => {};
