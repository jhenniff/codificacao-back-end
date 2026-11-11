import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoModule } from './alunos/alunos.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/escola_dbn'),
    AlunoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}