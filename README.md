![Logo](/src/assets/github/bk_readme.PNG)
 <p align='center'> 🛡️🦸‍♀️ <strong> Projeto Marvel Comics </strong> 🔨🦸‍♂️</p>
 <div display='flex' align='center'>
<img alt="GitHub followers" src="https://img.shields.io/github/followers/guidssantos?style=social"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/guidssantos/Marvel-comic">
</div>

## 💡 Sobre o Projeto
Marvel Comics é um website simulando uma loja de quadrinhos da marvel.  Projeto desenvolvido por conta de um desafio de Desenvolvimento Front-End

## 💭 Descrição Sobre o Projeto
Umas das primeiras coisas que realizei ao iniciar o projeto foi implementar as ferramentas prettier e eslint pois com elas, economizo bastante tempo e evito que a aplicação contenha algum bug e o codigo fica mais bonito! </br> Após isso, fiz a parte de menu, a estrutura do menu que utilizei geralmente utilizo na maioria dos meus projetos pois acho ele bem pratico e bonito fora que o codigo dele é bem facil de entender ([Menu](https://github.com/guidssantos/Marvel-comic/tree/master/src/components/Menu) e [Navbar](https://github.com/guidssantos/Marvel-comic/tree/master/src/components/Navbar)].

Eu queria algo que impactasse na primeira section, que não ficasse algo seco e que tenha a cara da marvel então, coloquei um banner com personagens de hqs da marvel e implementei um efeito de parallax, dei continuidade e pensei na possibilidade de fazer cards com a foto, nome da hq e um fundo preto, tive inspiração nos modelos de cards que desenvolvo no estagio e depois fiz uma animação que ficou bem legal, ao passar o mouse por cima da imagem, ela revela o nome da hq.

Depois criei as paginas que exibem a hq individual e a pagina de carrinho, sempre pensando no mobile e como o projeto ficaria responsivo. A partir daqui, tudo ficou mais legal pois, fiz a implementação de requisição da api da marvel utilizando o axios, pensei em utilizar o fetch porem, o axios é bem pratico, tive umas dificuldades mas nada como uma boa pesquisa no stackoverflow para ajudar. Com isso consegui colocar o conteudo de forma dinamica, também fiz uma pagina com paginação que exibe varias outras hqs e penso em implementar um campo de busca. Fiz a implementação de um carrinho de compras com redux, aprendi a utiliza-lo por conta de um curso em que eu realizei mas claro, qualquer erro e bug que acontecia eu pesquisava como resolve-lo no stack, medium ou youtube e acabou funcionando bem.

Por fim, realizei os testes com cypress, admito que geralmente eu utilizo o Jest porem, eu achei muito MASSA e facil a maneira de testar com cypress, a documentação é bem explicativa e o proprio dashboard já ajuda bastante. Fiz testes para verificar se continha o background na home, se tinha os cards em todas as paginas, se o carrinho estava mudando a quantidade e calculando o valor correto e entre outras coisas.

Esse Projeto foi bem divertido de se realizar, aprendi bastante coisas novas com ele e fico feliz que consegui desenvolver os componentes que eu queria. Espero que gostem!!

## 💻 Como executar o Projeto
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🧑‍🎨 Rodando o Front-End

```bash
# Clone este repositório
$ git clone https://github.com/guidssantos/Marvel-comic.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Marvel-comic

# Instale as dependências
$ npm install --force

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

### 🧑‍🔬 Rodando os Testes

```bash

# Instale as dependências
$ npm install --force

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute o cypress
$ npx cypress open

# Clique em E2E Testing

# Escolha seu navegador e clique em E2E Testing Novamente

# Os testes vão estar em Specs

```

## 👨‍💻 Tecnologias Usadas
- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://github.com/remix-run/react-router)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://github.com/axios/axios)
- [React Hot Toast](https://react-hot-toast.com/)
- [Cypress](https://www.cypress.io/)

Ver o [Package.json](https://github.com/guidssantos/Marvel-comic/blob/master/package.json)

## 👨‍🚀 Autor
<a href="https://portfolio-guilherme-santos.vercel.app/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102676504?s=400&u=6ab0dd04e74e8861422cbfd17a691440204734cd&v=4" width="100px;" alt="Portfolio"/>
 <br />
 <sub><b>Guilherme dos Santos</b></sub></a>
 <p> <b><a href='https://www.linkedin.com/in/guidssantos/'>Linkedin</a></b></p>

## Cupom
<strong>Easter Egg:</strong> Utilize a palavra 'neoapp' no insert coupon localizado no carrinho de compras

