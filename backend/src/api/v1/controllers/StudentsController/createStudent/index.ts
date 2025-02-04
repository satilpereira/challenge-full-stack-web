import { StudentsModel } from '@models/StudentsModel';
import '@models/StudentsModel/methods';
import { ExpressControllerFunction } from '@controllers/types';
import HttpStatusCode from '@constants/HttpStatusCode';
import ResponseHelper from '@helpers/ResponseHelper';
import { createStudentSchema } from '@controllers/StudentsController/createStudent/schema';
import { setuid } from 'process';

const studentsModel = new StudentsModel();

export const createStudent: ExpressControllerFunction = async (
  req,
  res,
  next
) => {
  try {
    const parsedBody = createStudentSchema.safeParse(req.body);

    if (!parsedBody.success) {
      const failedFields = parsedBody.error.formErrors.fieldErrors;

      Object.assign(
        req,
        ResponseHelper.error({
          status: HttpStatusCode.BAD_REQUEST,
          message: 'Erro de validação',
          error: 'error',
          details: failedFields,
        })
      );

      return next();
    }

    const { name, email, cpf, ra } = parsedBody.data;

    const student = await studentsModel.createStudent({
      name,
      email,
      cpf,
      ra,
    });

    if (student instanceof Error || student.insertedId === -1) {
      throw new Error('Erro ao tentar criar o aluno');
    }

    Object.assign(
      req,
      ResponseHelper.success({
        status: HttpStatusCode.OK,
        message: 'Aluno criado com sucesso',
        payload: { studentId: student.insertedId },
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
