import dotenv from 'dotenv';

dotenv.config();

const envVars = {
  PORT: 'PORT',
  NODE_ENV: 'NODE_ENV',
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
