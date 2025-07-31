# GapCafé Website

Este é o repositório para o site institucional da GapCafé.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

-   **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
-   **[React](https://react.dev/)**: Biblioteca JavaScript para a construção de interfaces de usuário.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática ao código.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização rápida e customizável.
-   **[shadcn/ui](https://ui.shadcn.com/)**: Coleção de componentes de UI reutilizáveis e acessíveis.
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones SVG.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en) (versão 18 ou superior)
-   [pnpm](https://pnpm.io/installation) (gerenciador de pacotes)

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/WelingtonGulinelli/gapcafe-website.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd gapcafe-website
    ```

3.  Instale as dependências do projeto com `pnpm`:
    ```bash
    npm install
    ```

### Executando o Servidor de Desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

O servidor irá recarregar automaticamente sempre que você fizer alterações nos arquivos do projeto.

## 📄 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

-   `npm dev`: Inicia o servidor de desenvolvimento.
-   `npm build`: Gera a versão de produção do site.
-   `npm start`: Inicia um servidor de produção após o build.
-   `npm lint`: Executa o linter para verificar erros de código.
