import { Module } from "@nestjs/common";
import { ImagemController } from './imagem.controller.js';

@Module({
    imports: [ImagemController], 
    controllers: [],
    providers: [],
})
export class AppModule {}