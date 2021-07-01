<h1 align="center">
  <img alt="GamePlay" height="80" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=E51C44&labelColor=0A1033">
  <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
  <img src="https://img.shields.io/static/v1?label=Expo&message=4.7.1&color=E51C44&labelColor=0A1033&logo=expo"/>
  <img src="https://img.shields.io/static/v1?label=React&message=0.63.2&color=E51C44&labelColor=0A1033&logo=react"/>
  <img src="https://img.shields.io/static/v1?label=Android&message=10&color=E51C44&labelColor=0A1033&logo=android"/>
</p>

![cover](.github/cover.png?style=flat)

## 💻 Projeto

O aplicativo tem por objetivo conectar e organizar momentos de diversão e jogos com os amigos criando grupos por meio do Discord.

Obs: Projeto realizado com base nas aulas oferecidas pela [Rocketseat](https://rocketseat.com.br/) no evento Next Level Week Together.

&nbsp;
## Features 

- Autenticação Social OAuth2 com servidor do Discord;
- Obtém perfil do usuário cadastro no Discord (username e avatar);
- Lista os servidores do Discord que o usuário faz parte;
- Permite realizar o agendamento de partidas;
- Permite filtrar as partidas por categoria;
- Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- Compartilha o convite para ingressar no servidor do usuário;
- Permite redirecionar o usuário para o seu próprio servidor;
- Disponibiliza a função de Logout.

&nbsp;
## Requisitos de ambiente

Acesse a [Wiki](https://github.com/LeoGianluca/gameplay-react-native/wiki) para um guia de instalação no Linux Ubuntu 20.04.2.0 LTS.

- Node + NPM;
- Yarn;
- Expo;
- Editor de código (Aconselhável uso do VsCode)

&nbsp;
## Executando o projeto

Utilize o **yarn** ou o **npm** para instalar as dependências do projeto.
```cl
# Se estive utilizando NPM

$ npm install
```

```cl
# Se estive utilizando Yarn

$ yarn install
```

Em seguida, inicie o projeto.

```cl
$ expo start
```

Lembre-se de criar o seu App no servidor do [Discord](https://discord.com/developers/docs/intro) para obter as credencias de autenticação. Em seguida, crie o arquivo _.env_ na raiz do projeto e adicione as configurações do seu App (remova o example do arquivo _.env.example_).

```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

&nbsp;
## Licença

&nbsp;

Este projeto está sob a licença do MIT. Consulte o arquivo [LICENSE](https://github.com/LeoGianluca/gameplay-react-native/blob/main/LICENSE.md) para obter mais detalhes.
