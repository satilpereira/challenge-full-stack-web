declare module '@models/StudentsModel' {
  interface StudentsModel {
    /**
     * @description Ping the database
     * @returns The result of the ping.
     * @throws Error if the ping fails.
     */
    ping(): Promise<any>;

    /**
     * @description Create a new student.
     * @param name The student's name.
     * @param email The student's email.
     * @param ra The student's RA.
     * @param cpf The student's CPF.
     * @returns The created student.
     * @throws Error if the student creation fails.
     */
    createStudent({
      name,
      email,
      ra,
      cpf,
    }: {
      name: string;
      email: string;
      ra: string;
      cpf: string;
    }): Promise<
      | {
          insertedId: number;
          acknowledged: boolean;
        }
      | {
          insertedId: -1;
          acknowledged: false;
          error: 'ra_already_exists';
        }
      | Error
    >;

    /**
     * @description Read a student by its ID.
     * @param studentId The student's ID.
     * @returns The student.
     * @throws Error if the student reading fails
     */
    readStudent({ studentId }: { studentId: number }): Promise<
      | {
          _id: number;
          name: string;
          email: string;
          ra: string;
          cpf: string;
        }
      | Error
    >;

    /**
     * @description Read all students.
     * @param search The search string.
     * @param page The page number.
     * @param limit The limit of students per page.
     * @returns The students.
     * @throws Error if the students reading fails.
     */
    readAllStudentsWithSearchAndPagination({
      search,
      page,
      limit,
    }: {
      search: string;
      page: number;
      limit: number;
    }): Promise<
      | {
          _id: number;
          name: string;
          email: string;
          ra: string;
          cpf: string;
        }[]
      | Error
    >;

    /**
     * @description Update a student by its ID.
     * @param studentId The student's ID.
     * @param name The student's name.
     * @param email The student's email.
     * @param ra The student's RA.
     * @param cpf The student's CPF.
     * @returns The updated student.
     * @throws Error if the student updating fails.
     */
    updateStudent({
      studentId,
      name,
      email,
      ra,
      cpf,
    }: {
      studentId: number;
      name: string;
      email: string;
      ra: string;
      cpf: string;
    }): Promise<
      | {
          matchedCount: number;
          modifiedCount: number;
        }
      | Error
    >;

    /**
     * @description Delete a student by its ID.
     * @param studentId The student's ID.
     * @returns The deleted student.
     * @throws Error if the student deletion fails.
     */
    deleteStudent({ studentId }: { studentId: number }): Promise<
      | {
          deletedCount: number;
        }
      | Error
    >;
  }
}
