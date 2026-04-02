import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlModule } from './url/url.module';
import { Url } from './url/entities/url.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: String(process.env.DB_PASSWORD || ''),
      database: process.env.DB_NAME || 'nanourl',
      entities: [Url],
      synchronize: true, // Auto-create tables (development mode)
    }),
    UrlModule,
  ],
})
export class AppModule {}