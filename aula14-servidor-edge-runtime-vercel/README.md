# Aula 14 - Servidor Edge Runtime e Deploy na Vercel

Nesta aula, aprendemos a criar e publicar uma **Serverless Function (API)** no ambiente de borda (**Edge Runtime**) utilizando a **Vercel CLI**.

---

## 1. O que foi feito na prática

1. **Autenticação na Vercel:** Login na plataforma via terminal usando a CLI da Vercel (`vercel login`).
2. **Criação da API no Edge Runtime:** Criamos o arquivo `api/hora-servidor.ts` configurado com `runtime: 'edge'`, que responde diretamente na borda da rede para menor latência.
3. **Deploy em Produção:** Publicamos o projeto na nuvem com o comando `vercel`.
4. **Execução Local:** Testamos a função localmente utilizando o comando `vercel dev`.

---

## 2. Códigos e Estrutura Criada

### Estrutura de Arquivos
```text
aula14-servidor-edge-runtime-vercel/
├── api/
│   └── hora-servidor.ts
├── package.json
└── README.md