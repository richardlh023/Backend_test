// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Product } from './Product/product.entity';
import { ProductService } from './Product/product.service';
import { ProductController } from './Product/product.controller';
import { User } from './user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from './jwt.middleware';
import { JwtAuthGuard } from './jwt-auth.guard'; // Import JwtAuthGuard

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'Richardlh023',
      username: 'postgres',
      entities: [User, Product],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    JwtModule.register({
      secret: 'JWT-Secret',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, JwtAuthGuard], // Include JwtAuthGuard in providers
})
export class AppModule {}
