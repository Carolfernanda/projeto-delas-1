<h1 align="center">


<p align="center"><b>Projeto Delas</b><p>
 
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/132357619/244519633-631f0e09-1ba9-41b8-b1ec-9ee7f98e1229.png" >

<p align="center"> Senac | Porto Digital | Minas  <p>
 
## Este é um projeto Integrador do curso de aperfeiçoamento Backend | Turma 01  
<br>

- [:dart: Objetivo](#-Objetivo)
- [📁 Arquitetura do Projeto](#-Arquitetura-do-Projeto)
- [:ledger: Tecnologias Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [:bookmark: Pacotes Utilizados](#-Tecnologias-e-Dependências-Utilizadas)
- [:inbox_tray: Instalação](#-Instalação)
- [:iphone: Interface Gráfica Para Realizar os Testes](#-Interface-Gráfica-Para-Realizar-os-Testes)
- [:on: Testando Rotas](#-Testando-Rotas-de-Login-e-Rotas-Com-ou-Sem-Proteção)

<br>
<br>
  
  ## :dart: Objetivo
A Plataforma Delas tem como objetivo principal fornecer um ambiente virtual de fácil utilização para empreendedoras expandirem seus negócios e alcançarem sucesso em suas jornadas empreendedoras. A plataforma permite que as empreendedoras cadastrem seus serviços e divulguem os produtos com os quais trabalham.<br>
 
  Através da Plataforma, as empreendedoras terão acesso a uma gama de recursos e funcionalidades que visam aprimorar suas interações com os clientes e fortalecer suas estratégias de negócios. A plataforma busca criar um ambiente seguro e confiável para o desenvolvimento de relacionamentos profissionais e o crescimento das empreendedoras.<br>

Com uma interface intuitiva e amigável, visamos simplificar o processo de expansão dos negócios das empreendedoras, permitindo que elas se concentrem em oferecer serviços de qualidade e alcançar resultados positivos em suas atividades empreendedoras.
 
### Perfil de Empreendedora:
 Cada empreendedora possui um perfil personalizado na plataforma, onde pode fornecer informações detalhadas sobre si mesma, sua empresa e seus objetivos. Esse perfil serve como uma vitrine virtual para apresentar suas habilidades, experiências e conquistas, ajudando a estabelecer uma presença profissional no mercado.<br>
### Perfil de Cliente: 
Os clientes também podem criar um perfil na plataforma, fornecendo seus dados pessoais. Esses perfis de cliente permitem o acesso aos serviços oferecidos pelas empreendedoras e facilitam a pesquisa por categorias específicas por meio de filtros. Os clientes podem encontrar empreendedoras com base em suas necessidades e preferências, facilitando o processo de contratação de serviços.
 <br>

<br>
[Apresentação do Projeto Final](#)
<br>
<br>
 <h3> 📁 Arquitetura do Projeto </h3>
<br>
:pushpin: Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 
  
 ```
  
  📁projeto-delas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 clientesController.js
   |  |    |- 📄 empreendedorasController.js  
   |  |
   |  |
   |  ||--📁 models
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |    |- 📄 index.js 
   |  |
   |  ||-📄 app.js
   |  |
   |  |
   |  | 
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 README.md
 ```

  
  ##  :ledger: Tecnologias Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|

 ## :bookmark: Pacotes Utilizadas
 | Ferramenta | Descrição |
 | --- | --- |
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
<br>

📝 [Link para a documentação]:(https://github.com/Carolfernanda/projeto-delas-1.git)



<br>
<br>

<h1 align="center">

<p align="center">
<img src= "#" width="500px" height="150"/>
</p>

<br>

`ps
# Clonar o repositório
$ git clone (https://github.com/Carolfernanda/projeto-delas.git)

# Entrar na pasta do repositório
$ cd projeto-delas

# Instalar as dependências
$ npm install

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
`
<br>
<br>


## ⚗️ Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br> 
 <!---
▫️ Rota de criação de empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todas as empreendedoras
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna o empreendimento por categoria
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera algum dado do cadastro da empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>
<br>
<br>
-->
## :on: Testando Rotas
 📢 Todas as rotas existentes neste projeto:

 <h3> No usuário Empreendedora, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /empreendedoras    | Listar todas as empreendedoras cadastradas              |   
| GET    | /:id               | Mostra o cadastro da empreendedora por ID               |  
| POST   | /                  | Registra uma nova empreendedora                         |   
| PUT    | /:id               | Altera dados da empreendedora identificada pelo id      |   
| DELETE | /:id               | Remove o cadastro da empreendedora identificada pelo id |   

<br>
 <h3> No usuário cliente, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /cliente           | Listar todas os clientes cadastrados                    |   
| GET    | /:id               | Mostra o cadastro do cliente       por ID               |  
| POST   | /                  | Registra um novo cliente                                |   
| PUT    | /:id               | Altera dados do cliente identificado pelo id            |   
| DELETE | /:id               | Remove o cadastro do cliente identificado pelo id       |   

<br>

## [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
<br>

#### [Ana Rita](https://github.com/aritarruda)
#### [Carolina Fernanda](https://github.com/Carolfernanda)
#### [Delis Glória](https://github.com/delisG) 
#### [Luana Martins](https://github.com/luanamcomin)
#### [Michelle Bessoni](https://github.com/mbessoni)
#### [Michelle Luana](https://github.com/Michele324)
#### [Renata Silvestre](https://github.com/renatasilvestr3)
#### [Tereza Oliveira](https://github.com/TerezaOliveira90)
#### [Vanessa Farias](https://github.com/Vr-Farias)


Projeto criado com a orientação e cuidado da Professora [Tereza Oliveira](https://github.com/devcode25))!<br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2>

</span>

<p align="center">
<img src= "#" width="50%" height="30%"/>
</p>
