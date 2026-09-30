# 📸 Aula 11: API de Upload de Imagens e Testes Unitários

Nesta aula foi desenvolvida uma funcionalidade completa para recebimento, tratamento, validação e armazenamento local de arquivos de imagem em uma aplicação NestJS.

---

### 📌 Conteúdos Aprendidos e Praticados

#### 1. Integração com o Multer
* Utilização da biblioteca **Multer** (`@nestjs/platform-express`) para suporte ao envio de formulários do tipo `multipart/form-data`.
* Uso do decorador `@UseInterceptors(FileInterceptor('file'))` para capturar arquivos enviados nas requisições.
* Uso do decorador `@UploadedFile()` no parâmetro do método do Controller.

#### 2. Configuração do Armazenamento em Disco (`diskStorage`)
* **Destino (`destination`)**: Salvamento físico dos arquivos na pasta local `./uploads`.
* **Nome do Arquivo (`filename`)**: Geração de nomes únicos para evitar sobrescrita de arquivos utilizando a biblioteca **`uuid`** (`v4`) juntamente com a extensão original do arquivo (`extname` da biblioteca `path`).

#### 3. Validação e Filtro de Arquivos (`fileFilter` e `limits`)
* **`fileFilter`**: Restrição do upload apenas para arquivos do tipo imagem utilizando expressões regulares (`/file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)/`).
* Exceções HTTP tratadas com `BadRequestException` para arquivos em formatos não suportados.
* **`limits`**: Configuração do tamanho máximo permitido para cada arquivo (ex: 2MB).

#### 4. Estrutura do Módulo e Testes Unitários
* Criação do módulo dedicado `ImagemModule` e importação do controlador `ImagemController`.
* Registro correto do `ImagemModule` no módulo principal `AppModule`.
* Ajuste do arquivo de testes unitários (`imagem.controller.spec.ts`) utilizando `Test.createTestingModule()`.
* Instalação de pacotes de tipagem TypeScript (`@types/express`, `@types/multer`, `@types/uuid`).
* Teste prático do envio de imagens via requisição `POST` com `multipart/form-data` no **Insomnia**.