- [Sobre este repositório](#sobre-este-repositório)
  - [Requisitos](#requisitos)
  - [Guia de instalação](#guia-de-instalação)
  - [Aplicações](#aplicações)
- [Como testar as aplicações](#como-testar-as-aplicações)
  - [Front-End](#front-end)
    - [Rotas:](#rotas)
    - [Comandos:](#comandos)
  - [Back-End](#back-end)
    - [Rotas:](#rotas-1)
    - [Comandos:](#comandos-1)
- [Escolha de tecnologias e Arquitetura](#escolha-de-tecnologias-e-arquitetura)
- [Documentação Back-End](#documentação-back-end)
- [Dependências](#dependências)
  - [Qualidade](#qualidade)
  - [Front-End](#front-end-1)
    - [Principais](#principais)
    - [Teste](#teste)
  - [Back-End](#back-end-1)
    - [Principais](#principais-1)
    - [Teste](#teste-1)
- [Feature Slice Design](#feature-slice-design)
  - [Pontos positivos](#pontos-positivos)
  - [Pontos negativos](#pontos-negativos)
  - [Navegação](#navegação)
  - [Anatomia de um Slice](#anatomia-de-um-slice)
- [Testes unitários e integração](#testes-unitários-e-integração)
- [Orientado a modelos](#orientado-a-modelos)
- [Desenvolvimento sem Back-End](#desenvolvimento-sem-back-end)
- [Cache e performance](#cache-e-performance)
- [Referencias](#referencias)

## Sobre este repositório

Este repositório utiliza `git submodules`. Para clona-lo, é necessário o seguinte comando:

```bash
git clone --recurse-submodules https://github.com/felipe-miranda-marreiros/Luizalabs-test-front.git
```

Este comando clonará dois repositórios `test-front` e `test-back`, sendo o principal o `test-front`.

### Requisitos

| Ferramentas | Versão              |
| ----------- | ------------------- |
| `docker`    | latest              |
| `node`      | v22.14.0 (ou maior) |

### Guia de instalação

Para iniciar o projeto, siga o seguinte comando no `terminal`, na raiz do projeto `test-front`:

- `MACOS/LINUX`:

Dê permissão para iniciar os scripts `install` e `docker-install`

```bash
chmod +x install.sh
```

```bash
chmod +x ./Luizalabs-test-back/docker-install
```

Inicie o script `install`:

```bash
make install
```

- `WINDOWS`:

Abra um terminal do `Git Bash` na raiz do repositório.

Inicie o script `install`:

```bash
sh install.sh
```

O que deve ser feito após a finalização do script:

- Instalar as dependencias com `npm install`
- Instalar as dependencias do `test-back` com `npm install`
- Iniciar os containers necessários com `docker`

### Aplicações

No final da instalação, teremos:

| Applicação     | URL                                                       |
| -------------- | --------------------------------------------------------- |
| `front-end`    | [http://localhost:5173/](http://localhost:5173/)          |
| `app`          | [http://localhost:3000/](http://localhost:3000/)          |
| `pgAdmin 4`    | [http://localhost:5050/](http://localhost:5050/)          |
| `postgreSQL`   | [http://localhost:5432/](http://localhost:5432/)          |
| `swagger`      | [http://localhost:3000/docs/](http://localhost:3000/docs) |
| `redisinsight` | [http://localhost:5540/](http://localhost:5540/)          |
| `redis`        | [http://localhost:6379/](http://localhost:6379/)          |

## Como testar as aplicações

### Front-End

Você começará na rota de [Produtos](http://localhost:5173/). Ao clicar no ícone de "coração" em um produto, ele será adiciona aos favoritos, tanto no back-end como também no `localStorage`.

#### Rotas:

| Rotas                                        | Caminho                         |
| -------------------------------------------- | ------------------------------- |
| [Login](http://localhost:5173/login)         | http://localhost:5173/login     |
| [Cadastro](http://localhost:5173/sign-up)    | http://localhost:5173/sign-up   |
| [Produtos](http://localhost:5173/)           | http://localhost:5173/          |
| [Favoritos](http://localhost:5173/wish-list) | http://localhost:5173/wish-list |

#### Comandos:

| Rotas                    | Descrição                    |
| ------------------------ | ---------------------------- |
| npm run dev              | Inicia a aplicação           |
| npm run test:unit        | Executa testes unitários     |
| npm run test:integration | Executa testes de integração |

### Back-End

Em `./Luizalabs-test-back`. Por meio do `Swagger` com `http://localhost:3000/docs/`

#### Rotas:

| Rotas                         | Descrição                                          |
| ----------------------------- | -------------------------------------------------- |
| /api/auth/sign-in             | (POST) Faz login com `email` e `senha`             |
| /api/auth/sign-up             | (POST) Cria uma nova conta                         |
| /api/products                 | (GET) Retorna uma lista de produtos                |
| /api/users/current-user       | (GET) Retorna o usuário logado                     |
| /api/wish/product/:product_id | (POST) Adiciona/remove um produto em favoritos     |
| /api/wish                     | (DELETE) Remove a listagem de um usuário           |
| /api/wish/current             | (GET) Retorna a quantidade de produtos favoritados |
| /api/wish/products            | (GET) Retorna uma listagem de produtos             |

#### Comandos:

| Rotas                                 | Descrição                    |
| ------------------------------------- | ---------------------------- |
| npm run start:dev                     | Inicia a aplicação           |
| npm run test:unit                     | Executa testes unitários     |
| npm run test:integration (com Docker) | Executa testes de integração |

## Escolha de tecnologias e Arquitetura

- `Front`: utilizando como métodologia `Feature Slice Design` com React.js e Vite. Para testes: Jest, MSW e React Testing Library.

- `Back`: utilizando `Arquitetura por Camadas` com TypeScript e Express.js. Para o banco de dados, escolhi PostgreSQL. Para cacheamento, Redis com `Cache Aside Pattern` e Mailtrap para envio de SMTP. Swagger para documentação baseado em contratos de domínio. Para testes, Supertest, Jest e TestContainers.

## Documentação Back-End

**[Acesse aqui](https://github.com/felipe-miranda-marreiros/Luizalabs-test-back).**

## Dependências

### Qualidade

| Lib                               | Versão |
| --------------------------------- | ------ |
| `@commitlint/config-conventional` | 30.0.3 |
| `eslint`                          | 9.29.0 |
| `husky`                           | 9.1.7  |
| `prettier`                        | 3.6.0  |

### Front-End

#### Principais

| Lib                     | Versão  |
| ----------------------- | ------- |
| `react`                 | 19      |
| `vite`                  | 7.0.0   |
| `shadcn`                | latest  |
| `axios`                 | latest  |
| `@tanstack/react-query` | 5.81.2  |
| `react-hook-form`       | 7.58.1  |
| `react-router`          | 7.6.2   |
| `tailwindcss`           | 4.1.10  |
| `zod`                   | 3.25.67 |

#### Teste

| Lib                      | Versão |
| ------------------------ | ------ |
| `jest`                   | 30.0.3 |
| `msw`                    | 2.10.2 |
| `@testing-library/react` | 16.3.0 |

### Back-End

#### Principais

| Lib            | Versão  |
| -------------- | ------- |
| `bcrypt`       | 5.0.2   |
| `express`      | 4.17.23 |
| `jsonwebtoken` | 9.0.10  |
| `nodemailer`   | 7.0.3   |
| `pg`           | 8.16.2  |
| `drizzle-orm`  | 0.44.2  |
| `zod`          | 3.25.67 |
| `redis`        | 5.5.6   |
| `pino`         | 9.7.0   |

#### Teste

| Lib                          | Versão |
| ---------------------------- | ------ |
| `supertest`                  | 7.1.1  |
| `jest`                       | 30.0.3 |
| `@testing-library/react`     | 16.3.0 |
| `@testcontainers/redis`      | 11.0.3 |
| `@testcontainers/postgresql` | 11.0.3 |

## Feature Slice Design

Feature Slice Design (FSD) é uma metodologia de arquitetura para a construção de aplicações `Front-End`. Simplificando, é uma compilação de regras e convenções sobre a organização do código. O principal objetivo dessa metodologia é tornar o projeto mais compreensível e estruturado diante das constantes mudanças nos requisitos de negócios.

Este projeto utiliza a metodologia baseada em FSD, o que significa que separamos as regras de negócios por Features ou Slices.

Esses recursos são autocontidos e desvinculados uns dos outros. Por exemplo, o Slice(A) não pode se comunicar diretamente com Slice(B). É uma regra que podemos criar para proteger as regras de negócios, facilitando a pesquisa, a manutenção e os testes dos desenvolvedores.

### Pontos positivos

- React é uma biblioteca e por isso depende dos desenvolvedores alinharem uma arquitetura ou metodologia para criar seus projetos. FSD permite criar regras que podem ser seguidas por todas as pessoas envolvidas no projeto. Essas regras podem ser internalizadas em código por meio de linters como Eslint e pela cultura de testes e code review.
- Diferente de outras metodologias também relacionadas com Feature/Slice, FSD permite ter menos carga cognitiva e mais coesão de projeto. Componentes são baseados em suas entidades e não em uma pasta qualquer.
- É fácil de navegar, testar e fazer manutenção.
- Pode ser automatizado por CLI ou AI.

### Pontos negativos

- Curva de aprendizado mediana. Desenvolvedor precisa entender as regras e as diferenças entre Entities e Features. Constuma ser melhor entendido com alinhamento entre UX/UI e desenvolvedors back-end.
- Arquitetura MVVM pode ser uma alternativa melhor, pois constuma ter ainda mais coesão.

### Navegação

O projeto `Front-End` está estruturado desta forma:

Em `./src`:

```
├── app - possui providers, routes e o bootstrap da aplicação.
├── entities - possui entidades (Product, Wish, User)
├── features - possui lógicas recorrentes (Logout)
├── pages - possui todas as telas da aplicação (Login, Product, Wishes, SignUp)
└── shared - possui todo código génerico (componentes, api, utils)
```

### Anatomia de um Slice

Cada Slice (ou Feature) pode conter a mesma estrutura:

Exemplo com Product (`./src/entities/Product`):

```
├── api - todos os endpoints (com React Query) relacionados a Product.
├── models - todas as interfaces relacionadas a Product
├── services - todas as implementação com Axios relacionados a Product.
└── ui - components relacionados a Product
```

## Testes unitários e integração

Este projeto utiliza `Jest` com `React Testing Library`. Podemos escrever testes unitários e de integração de forma escalável configurando um `Custom Render` e `Custom Render Hook`. Aliado com `MSW` para simular requisições com Back-end.

O principal foco é testar comportamentos em vez de detalhes de implementações. Por exemplo, não mockar o React Hook Form, mas em vez disso testar como o usuário iria se comportar utilizando um componete ou página que utiliza tal hook.

## Orientado a modelos

Se temos esta interface:

```ts
interface Product {
  id: string
  description: string
  title: string
  amount: number
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}
```

Todos os componetes relacionados ao Product seguirão ela. Isso traz beneficios como fácil manutenção e segurança na hora de refatorações. Testes feitos com `MSW` também podem ser beneficiados com essa estratégia. Você pode ver um exemplo [aqui](https://github.com/felipe-miranda-marreiros/Luizalabs-test-front/tree/main/src/shared/test/server/Product).

## Desenvolvimento sem Back-End

Podemos iniciar o desenvolvimento do Front-End sem necessidade do Back-End por meio do `Adapter Pattern`. Podemos criar uma interface que apenas o Front-End pode interagir e depois converte-la para a interface de API.

`./src/entities/Product/services/adapters`

```ts
import type { Product, ProductAPI } from '../../models/product'

function productAdapter(api: ProductAPI): Product {
  return {
    amount: api.price,
    category: api.category,
    description: api.description,
    id: api.id.toString(),
    image: api.image,
    rating: {
      count: api.rating.count,
      rate: api.rating.rate
    },
    title: api.title
  }
}

function productListAdapter(products: ProductAPI[]): Product[] {
  return products.map(productAdapter)
}

export const productAdapters = {
  productAdapter,
  productListAdapter
}
```

## Cache e performance

Este projeto utiliza `React Query` com `Axios` para fazer requisições e gerenciar cache. Eu também utilizo não só para chamadas de API, mas também para outras regras que utilizam `useEffect`.

```ts
export function useAppConfig() {
  const { isLoading } = useQuery({
    queryKey: ['SETUP_APP'],
    queryFn: async () => {
      await appService.setupAppConfig()
      return true
    },
    enabled: appService.getAppConfig().shouldFetch
  })
  return isLoading
}
```

O hook `useAppConfig` interage com o `LocalStorage` e podemos invalidar o cache em caso de logout. Isso permite realizar renderizações mais consistentes e menos acopladas,
pois precisamos apenas da chave do cache para chama-lo novamente com novos dados.

## Referencias

- [Feature-Slice Design](https://feature-sliced.design/)
