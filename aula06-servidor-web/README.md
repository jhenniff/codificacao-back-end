# Aula 06 - Servidor Web Nativo com Node.js

Este projeto foi desenvolvido durante a aula sobre criação de um servidor HTTP nativo no Node.js, sem a utilização de frameworks externos como o Express.

---

# O que foi feito hoje

1.  Criação do Servidor HTTP (`http.createServer`)
  Utilização do módulo nativo `http` do Node.js para criar um servidor web capaz de escutar requisições na porta `3000`.

2. Registo de Logs e Monitorização
    Implementação do registo de logs (`console.log`) para monitorizar as requisições recebidas, exibindo o método HTTP (`req.method`) e a URL/rota solicitada (`req.url`).

3. Configuração de Cabeçalhos de Segurança (HTTP Headers)
    Definição do objeto `cabecalhoPadrao` com os cabeçalhos de segurança:
     * `X-Content-Type-Options: nosniff`: impede que o navegador adivinhe o tipo MIME dos ficheiros.
     * `X-Frame-Options: DENY`: protege a aplicação contra ataques de *clickjacking*.

4. Roteamento Simples e Respostas JSON
    Rota `/status`: Retorna um código de estado HTTP `200 (OK)` com o corpo contendo `{"servidorWeb": "Online"}` em formato JSON.
    Outras Rotas (Tratamento de Erro 404): Caso a rota acessada não exista, retorna o estado `404 (Not Found)` com a mensagem `{"erro": "Página não encontrada"}`.

