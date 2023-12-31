import { ProductCategories } from '../../../data/enums/product/foodCategores';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Date } from 'mongoose';

export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'property title',
    example: 'Bunch of pineapple',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'property description',
    example: 'sweet fried rice.',
  })
  desc: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'property image url',
    example: './assets/uploads/products/ifpaidfaporiductl.png',
  })
  img: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'property categories',
    example: 'fruit',
  })
  categories: ProductCategories[];

  @IsNotEmpty()
  @ApiProperty({
    description: 'price of product',
    example: 5000,
  })
  price: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'price of product',
    example: true,
  })
  InStock: boolean;

  @IsNotEmpty()
  @ApiProperty({
    description: 'price of product',
    example: true,
  })
  date: Date;
}
