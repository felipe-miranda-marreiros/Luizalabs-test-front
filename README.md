# Luizalabs-test

- [Luizalabs-test](#luizalabs-test)
  - [Sobre este repositório](#sobre-este-repositório)
    - [Requisitos](#requisitos)
    - [Guia de instalação](#guia-de-instalação)
    - [Aplicações](#aplicações)
  - [Escolha de tecnologias e Arquitetura](#escolha-de-tecnologias-e-arquitetura)
  - [Documentação Back-End](#documentação-back-end)
  - [Dependências](#dependências)
    - [Qualidade](#qualidade)
    - [Front-End](#front-end)
      - [Principais](#principais)
      - [Teste](#teste)
    - [Back-End](#back-end)
      - [Principais](#principais-1)
      - [Teste](#teste-1)
  - [Feature Slice Design](#feature-slice-design)
    - [Navegação](#navegação)
    - [Anatomia de um Slice](#anatomia-de-um-slice)
  - [Testes unitários e integração](#testes-unitários-e-integração)
  - [Orientado a modelos](#orientado-a-modelos)
  - [Desenvolvimento sem Back-End](#desenvolvimento-sem-back-end)
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

Para iniciar o projeto, siga o seguinte comando no terminal:

- `MACOS/LINUX`:

Dê permissão para iniciar o script `install.sh`

```bash
chmod +x install.sh
```

- `Script`:

```bash
make install
```

O que deve ser feito:

```
Instala as dependencias com npm install
Verifica se o submodulo test-back está presente e atualizado com git submodule update --init --recursive
Instala as dependencias do test-back
```

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

## Escolha de tecnologias e Arquitetura

- `Front`: utilizando como métodologia Feature Slice Design com React.js e Vite. Para testes: Jest, MSW e React Testing Library.

- `Back`: utilizando Arquitetura por Camadas com TypeScript e Express.js. Para o banco de dados, escolhi PostgreSQL. Para cacheamento, Redis com `Cache Aside Pattern` e Mailtrap para envio de SMTP. Swagger para documentação baseado em contratos de domínio. Para testes, Supertest, Jest e TestContainers.

## Documentação Back-End

**[Para documentação do Back-End](https://github.com/felipe-miranda-marreiros/Luizalabs-test-back).**

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

## Referencias

- [Feature-Slice Design](https://feature-sliced.design/)
