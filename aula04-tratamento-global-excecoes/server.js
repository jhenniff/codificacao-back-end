import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (err) =>{
    console.error('[ERRO DE PROCESSO - uncaughtException]:' , err.message);
});

process.on('unhandledRejection', (reason) =>{
    console.error('[PROMISE REJEITADA - unhandledRejection]' , reason);
});

app.get('/sucesso', (req, res) => {
    res.json({sucess: true, message: 'operação realizada com sucesso!'});
});

app.get('/erro-sincrono', (req, res, next) => {
    try{
        throw new Error('Falha ao processar a Regra de negócios!');
    }catch(erro){
        next(erro);
    }

});

app.get('/erro-assicrono', async (req, res, next) =>{
    try{
    await Promise.reject(new Error('Erro na consulta no banco de dados externos'));
}catch(erro){
    next(erro);
}
});