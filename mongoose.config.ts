import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    return {
      retryWrites: false,
      retryAttempts: 1,
      uri: 'mongodb://localhost:5426/mongo-test',
      ssl: false,
      sslValidate: false,
      sslCA: null,
    };
  }
}
