import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (token) {
      try {
        const decoded = this.jwtService.verify(token);
        req['user'] = decoded;

      } catch (error) {

      }
    }

    next();
  }
}