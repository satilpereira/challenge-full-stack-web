declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Application configuration
      NODE_ENV?: 'development' | 'production' | 'test';
      PORT?: string;

      // JWT configuration
      JWT_SECRET?: string;

      // MongoDB configuration
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;

      // AWS configuration
      ACC_AWS_BUCKET_NAME?: string;
      ACC_AWS_REGION?: string;
      ACC_AWS_ACCESS_KEY?: string;
      ACC_AWS_SECRET_ACCESS_KEY?: string;

      // SMTP configuration
      SMTP_DOMAIN?: string;
      SMTP_PASSWORD?: string;
      SMTP_HOST?: string;
      SMTP_EMAIL?: string;
      SMTP_PORT?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
