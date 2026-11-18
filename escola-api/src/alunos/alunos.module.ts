
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosController } from './aluno.controller.js';
import { AlunosService } from './alunos.service.js';
import { Aluno, Alunoschema } from '../schemas/aluno.schemas.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aluno.name, schema: Alunoschema }]),
  ],
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunoModule {}

