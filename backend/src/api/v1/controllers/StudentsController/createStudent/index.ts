import { StudentsModel } from '@models/StudentsModel';
import '@models/StudentsModel/methods';
import { ExpressControllerFunction } from '@controllers/types';
import HttpStatusCode from '@constants/HttpStatusCode';
import ResponseHelper from '@helpers/ResponseHelper';
import { createStudentSchema } from '@controllers/StudentsController/createStudent/schema';

const studentsModel = new StudentsModel();

export const createStudent: ExpressControllerFunction = async (
  req,
  res,
  next
) => {
  try {
    const parsedBody = createStudentSchema.safeParse(req.body);

    if (!parsedBody.success) {
      Object.assign(
        req,
        ResponseHelper.error({
          status: HttpStatusCode.BAD_REQUEST,
          message: 'Erro de validação',
          error: 'error',
          details: parsedBody.error.errors,
        })
      );

      return next();
    }

    Object.assign(
      req,
      ResponseHelper.error({
        status: HttpStatusCode.NOT_FOUND,
        message: 'Usuário não encontrado',
        error: 'error',
        details: 'Confira o email inserido e tente novamente',
      })
    );

    return next();
  } catch (error) {
    Object.assign(
      req,
      ResponseHelper.error({
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Erro interno do servidor',
        error: 'error',
        details: 'Ocorreu um erro ao tentar criar o aluno',
      })
    );
    return next();
  }
};
