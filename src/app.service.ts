import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async insertRecordsAndPrintResultingQueries(): Promise<void> {
    await this.clearRecentQueries();
    for (let i = 0; i < 5; i++) {
      await this.createSingleRecord();
      await this.createManyRecords();
    }
    await this.printRecentQueries();
  }

  private async clearRecentQueries() {
    await this.prisma.$queryRaw<
      {
        result: string;
      }[]
    >(
      Prisma.sql(['select cast(pg_stat_statements_reset() as text) as result']),
    );
  }

  private async printRecentQueries() {
    const queries = await this.prisma.$queryRaw<
      { calls: number; sql: string }[]
    >(Prisma.sql(['select calls,query as "sql" from pg_stat_statements']));
    for (const query of queries) {
      console.log(`${query.calls} calls for: ${query.sql}`);
    }
  }

  private async createSingleRecord() {
    return await this.prisma.dataPoints.create({
      data: this.randomData(),
    });
  }

  private async createManyRecords() {
    return await this.prisma.dataPoints.createMany({
      data: [this.randomData(), this.randomData(), this.randomData()],
    });
  }

  private randomData() {
    return {
      alpha: this.randomNumber(),
      beta: this.randomNumber(),
      gamma: this.randomNumber(),
      delta: this.randomNumber(),
      epsilon: this.randomNumber(),
    };
  }

  private randomNumber() {
    return Math.floor(Math.random() * 10000);
  }
}
