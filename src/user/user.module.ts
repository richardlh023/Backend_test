import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { JwtStrategy } from '../jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({ secret: 'JWT-Secret' })],
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
})
export class UserModule {}
