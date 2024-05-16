import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { Food, FoodSchema } from './schemas/food.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:5426'),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Food.name, schema: FoodSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
