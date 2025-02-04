import { Router } from 'express';
import { createStudent } from '@controllers/StudentsController';

const studentsRouter = Router();

/**
 * Route to create a student.
 * @name POST /api/v1/students/create
 * @function createStudent
 */
studentsRouter.post('/create', createStudent);

export { studentsRouter };
