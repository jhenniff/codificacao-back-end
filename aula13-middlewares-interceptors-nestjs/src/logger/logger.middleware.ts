import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const currenUrl = req.originalUrl || req.url;
    console.log(`[LOG] Metodo: ${req.method} | Rota:$ {req.path}`)
    if(currenUrl.startsWith('/admin')){
      const base = req.headers['x-user-base']
    if( base !== 'Administrador'){
      return res.status(403).json({
        Codigo:403,
        mensagem:'Acesso negado: Privilegio de administrador necessario',
        registro:new Date,
      })
    }
    }

    next();
  }
}
