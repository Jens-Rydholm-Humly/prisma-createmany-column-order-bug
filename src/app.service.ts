import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello(): Promise<string> {
    await this.createSingleRecord();
    await this.createManyRecords();
    return 'Hello World!';
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
