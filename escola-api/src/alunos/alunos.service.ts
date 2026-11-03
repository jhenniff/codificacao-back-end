import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { Aluno, AlunoDoc } from '../schemas/aluno.schemas.js';

@Injectable()
export class AlunosService {
  constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDoc>) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const novoAluno = new this.alunoModel(createAlunoDto);
    return novoAluno.save();
  }

  async findAll(): Promise<Aluno[]> {
    return this.alunoModel.find().exec();
  }

  async findOne(id: string): Promise<Aluno | null> {
    return this.alunoModel.findById(id).exec();
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | null> {
    return this.alunoModel
      .findByIdAndUpdate(id, updateAlunoDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Aluno | null> {
    return this.alunoModel.findByIdAndDelete(id).exec();
  }
}