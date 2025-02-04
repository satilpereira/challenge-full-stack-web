import { StudentsModel } from '@models/StudentsModel';
import Logger from '@helpers/terminal/Logger';

const log = new Logger();

StudentsModel.prototype.createStudent = async function ({
  cpf,
  email,
  name,
  ra,
}) {
  try {
    const newStudent = await this.prisma.student.create({
      data: {
        name,
        email,
        ra,
        cpf,
      },
    });

    return {
      insertedId: newStudent.id,
      acknowledged: true,
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes(
        'Unique constraint failed on the constraint: `col_students_ra_key`'
      )
    ) {
      log.error('An error occurred while creating a student.', error);
      return {
        insertedId: -1,
        acknowledged: false,
        error: 'ra_already_exists',
      };
    }
    log.error('An error occurred while creating a student.', error);
    throw new Error('An error occurred while creating a student.');
  }
};
