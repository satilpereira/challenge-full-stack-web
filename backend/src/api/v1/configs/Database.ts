import { PrismaClient } from '@prisma/client';
import Logger from '@helpers/terminal/Logger';

const log = new Logger();

/**
 * Database class for managing database connections using Prisma.
 */
class Database {
  private prisma: PrismaClient;

  /**
   * Creates an instance of the Database class.
   */
  constructor() {
    log.group('Initializing Prisma Client');
    try {
      this.prisma = new PrismaClient({
        log: [
          { emit: 'event', level: 'query' },
          { emit: 'event', level: 'error' },
          { emit: 'event', level: 'info' },
          { emit: 'event', level: 'warn' },
        ],
      });

      // // Set up logging events
      // this.prisma.$on('query', (e: any) => {
      //   log.debug(`Query: ${e.query}`);
      // });

      // this.prisma.$on('error', (e: Error) => {
      //   log.error(`Database error: ${e.message}`);
      // });

      // this.prisma.$on('info', (e: Error) => {
      //   log.info(`Database info: ${e.message}`);
      // });

      // this.prisma.$on('warn', (e: Error) => {
      //   log.warn(`Database warning: ${e.message}`);
      // });

      log.success('Database class instantiated');
      log.groupEnd();
    } catch (error) {
      log.error(`Error creating Prisma instance: ${error}`);
      log.groupEnd();
      throw error;
    }
  }

  /**
   * Singleton instance of the Database class.
   */
  private static instance: Database;

  /**
   * Get the singleton instance of the Database class.
   * @returns The singleton instance of the Database class.
   */
  static getInstance(): Database {
    log.group('Database.getInstance');
    if (!Database.instance) {
      log.info('Creating new Database instance');
      Database.instance = new Database();
    }
    log.info('Returning Database instance');
    log.groupEnd();
    return Database.instance;
  }

  /**
   * Tests the database connection.
   * @throws {Error} Throws an error if the connection test fails.
   */
  public async connect(): Promise<void> {
    log.group('Database.connect');
    try {
      await this.prisma.$connect();
      log.success('Connected to Database');
      log.groupEnd();
    } catch (error) {
      log.error(`Error connecting to Database: ${error}`);
      log.groupEnd();
      throw error;
    }
  }

  /**
   * Closes the database connection.
   * @throws {Error} Throws an error if the connection cannot be closed.
   */
  public async close(): Promise<void> {
    log.group('Database.close');
    try {
      await this.prisma.$disconnect();
      log.success('Closed connection to Database');
      log.groupEnd();
    } catch (error) {
      log.error(`Error closing connection to Database: ${error}`);
      log.groupEnd();
      throw error;
    }
  }

  /**
   * Get the Prisma Client instance.
   * @returns The Prisma Client instance.
   */
  public getPrisma(): PrismaClient {
    log.group('Database.getPrisma');
    log.info('Returning Prisma Client instance');
    log.groupEnd();
    return this.prisma;
  }

  /**
   * Test the connection to the database.
   */
  public testConnection(): void {
    log.group('Database.testConnection');
    log.info('Testing connection to database');
    this.prisma
      .$connect()
      .then(() => {
        log.success('Connection to database successful');
      })
      .catch((error: Error) => {
        log.error(`Error connecting to database: ${error}`);
      })
      .finally(() => {
        log.groupEnd();
      });
  }
}

export default Database;
