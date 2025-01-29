import dotenv from 'dotenv';

dotenv.config();

const envVars = {
  PORT: 'PORT',
  NODE_ENV: 'NODE_ENV',
  DB_HOST: 'DB_HOST',
  DB_PORT: 'DB_PORT',
  DB_USER: 'DB_USER',
  DB_PASSWORD: 'DB_PASSWORD',
  DB_NAME: 'DB_NAME',
  DB_URL: 'DB_URL',
} as const;

type EnvVars = typeof envVars;

class Env {
  private static requiredVars: EnvVars = envVars;

  public static get(key: keyof EnvVars): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is not set.`);
    }
    return value;
  }

  public static validate(): void {
    for (const key of Object.keys(Env.requiredVars)) {
      Env.get(key as keyof EnvVars);
    }
  }
}

export default Env;
