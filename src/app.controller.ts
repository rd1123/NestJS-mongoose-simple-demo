import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateFoodDto } from './dto/create-food.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cat/:id')
  async getCatByID(@Param('id') id: string): Promise<string> {
    return await this.appService.doGetCat(id);
  }

  @Get('food/:id')
  async getFoodByID(@Param('id') id: string): Promise<string> {
    return await this.appService.doGetFood(id);
  }

  @Post('cat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    await this.appService.doCreateCat(createCatDto);
  }

  @Post('food')
  async createFood(@Body() createFoodDto: CreateFoodDto) {
    await this.appService.doCreateFood(createFoodDto);
  }
}
