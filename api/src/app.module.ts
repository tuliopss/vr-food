import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './product/repository/product.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/vr-food'),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
