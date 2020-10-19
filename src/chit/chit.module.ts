import { Module } from '@nestjs/common';
import { ChitService } from './chit.service';
import { ChitController } from './chit.controller';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { ChitSchema } from './schemas/chit.schema';

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Chit', schema: ChitSchema }]),
    PassportModule,
  ],
  providers: [ChitService],
  controllers: [ChitController]
})
export class ChitModule {}
