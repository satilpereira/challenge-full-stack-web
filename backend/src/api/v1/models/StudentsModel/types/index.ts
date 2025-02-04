declare module '@models/StudentsModel' {
  interface StudentsModel {
    /**
     * @description Ping the database
     * @returns The result of the ping.
     * @throws Error if the ping fails.
     */
    ping(): Promise<any>;
  }
}
