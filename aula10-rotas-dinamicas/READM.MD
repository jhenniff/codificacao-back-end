# 🛣️ Aula 10: Rotas Dinâmicas, Route Params e Query Params

Nesta aula aprendemos a tornar nossas rotas dinâmicas e capazes de receber variáveis e filtros diretamente da URL da requisição.

---

### 📌 Conteúdos Aprendidos e Praticados

#### 1. Parâmetros de Rota (*Route Parameters*)
* **Conceito:** Variáveis inseridas diretamente no caminho da URL para identificar recursos específicos (ex: `/usuarios/:id`).
* **Decorador:** `@Param('id')` para capturar o valor passado no caminho e utilizar na lógica interna do Controller ou Service.

#### 2. Parâmetros de Busca (*Query Parameters*)
* **Conceito:** Parâmetros opcionais adicionados ao final da URL após a chave `?` para realizar buscas, paginação e ordenação (ex: `/produtos?categoria=eletronicos&limite=10`).
* **Decorador:** `@Query('categoria')` para extrair os filtros enviados pelo cliente.

#### 3. Tratamento de Erros Básicos
* Verificação de parâmetros obrigatórios e envio de exceções quando um recurso específico não é encontrado.