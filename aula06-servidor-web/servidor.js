import http from 'http';

const servidorWeb = http.createServer((req, res) => {
    console.log(`[LOG] Método Recebido: ${req.method} | Rota: ${req.url}`);

    const cabecalhoPadrao ={
        'X-content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
    };

    if(req.url === '/status'){
        res.writeHead(200, {
            ...cabecalhoPadrao,
            'content-type': 'application/json'
        });

        res.end(JSON.stringify({servidorWeb: 'online'}));
    }else{
        res.whitHead(404, {
            ...cabecalhoPadrao,
           'content-type': 'application/json'
        });

        res.end(JSON.stringify({erro: 'pagina não encontrada!'}));
    }
});
servidorWeb.listen(3000, () => {
    console.log('Servidor web ativo!');
    console.log ('porta: 3000');



});