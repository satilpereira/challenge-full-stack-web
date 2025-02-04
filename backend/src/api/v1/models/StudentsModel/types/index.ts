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
  }
}
