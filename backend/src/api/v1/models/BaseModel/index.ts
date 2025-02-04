import { PrismaClient } from '@prisma/client';
import Database from '@configs/Database';
import Logger from '@helpers/terminal/Logger';

const log = new Logger();

export abstract class BaseModel {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = Database.getInstance().getPrisma();
  }

  public async ping(): Promise<any> {
    const query = await this.prisma.$queryRaw<{ '1': BigInt }[]>`SELECT 1;`;
    return query.map((row) =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [
          key,
          typeof value === 'bigint' ? value.toString() : value,
        ])
      )
    );
  }
}
