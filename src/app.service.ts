import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateFoodDto } from './dto/create-food.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Food, FoodDocument } from './schemas/food.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<CatDocument>,
    @InjectModel(Food.name)
    private readonly foodModel: Model<FoodDocument>,
  ) {}

  async doGetCat(id: string): Promise<string> {
    const cat = await this.catModel.findById(id);

    const aggreCats = await this.catModel.aggregate<Cat>([
      {
        $group: {
          _id: '$breed',
          total: { $sum: 1 },
        },
      },
    ]);

    console.log('aggregate result => ', aggreCats);
    return cat.name;
  }

  async doCreateCat(dto: CreateCatDto) {
    await this.catModel.create({ ...dto });
  }

  async doCreateFood(dto: CreateFoodDto) {
    await this.foodModel.create({ ...dto });
  }

  async doGetFood(id: string) {
    const food = await this.foodModel.aggregate<Food>([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
    console.log('food result => ', food);

    return 'getfood';
  }
}
