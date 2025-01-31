import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Document<Food>;

@Schema()
export class Food {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  country: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
