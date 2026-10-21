 Aula 05 - Variáveis de Ambiente e Configurações de Segurança

Este projeto foi desenvolvido durante a aula sobre o uso e gestão de variáveis de ambiente no Node.js utilizando a biblioteca dotenv.


O que foi feito hoje

1. *Configuração de Variáveis de Ambiente (.env)*
    Criação e estruturação do ficheiro .env para armazenar informações sensíveis e de configuração da aplicação ( portas, URLs de banco de dados e chaves de API).
    Criação do ficheiro .env.example como modelo público de referência para o projeto, sem expor dados confidenciais.

2. *Garantia de Segurança com Git (.gitignore)*
    Adição do ficheiro .env ao .gitignore para impedir que chaves secretas e credenciais sejam enviadas para o repositório remoto (como o GitHub).

3. *Carregamento das Variáveis no Node.js (app.js)*
    Utilização do pacote dotenv (dotenv.config()) para carregar dinamicamente as variáveis de ambiente na aplicação.
    Leitura de valores através de process.env (ex.: process.env.PORT, process.env.API_KEY_PAGAMENTOS e process.env.DATABASE_URL).

4. *Validação e Controlo de Erros*
    Implementação de verificação de segurança na inicialização da aplicação: caso a chave de API não esteja definida nas variáveis de ambiente, o sistema exibe uma mensagem de erro crítico e interrompe a execução com process.exit(1).