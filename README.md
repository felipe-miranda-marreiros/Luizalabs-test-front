# Luizalabs-test-front

## Sobre este repositório

Este repositório utiliza `git submodules`. Para clona-lo, é necessário o seguinte comando:

```bash
git clone --recurse-submodules https://github.com/felipe-miranda-marreiros/Luizalabs-test-front.git
```

Este comando irá clonar dois repositórios `test-front` e `test-back`, sendo o principal o `test-front`.

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
Verifica se o submodulo está presente e atualizado com git submodule update --init --recursive
Instala as dependencias do test-back
```
