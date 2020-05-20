# Projet Site Web pour l'ABSL - Un Ami Pour La Vie

<a href="http://www.unamipourlavie.be"><img src="http://www.unamipourlavie.be/images/logo.jpg" title="ASBL - Un Ami Pour La Vie" alt="Un Ami Pour La Vie"></a>
[![Build Status](https://img.shields.io/badge/Un%20Ami%20Pour%20La%20Vie-Mode%20Dev-blue)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/Hess-Gregory/un_ami_pour_la_vie/blob/master/LICENSE) [![FrameWork](https://img.shields.io/badge/Angular%20CLI-v8.2.9-green?logo=angular&style=plastic)](https://cli.angular.io/) [![JavaScript engine.](https://img.shields.io/badge/node.js-grey?logo=Node.js&style=plastic)](https://nodejs.org/en/) [![Security.](https://img.shields.io/badge/Json%20Web%20Token-v8.5.1-red?logo=JSON&style=plastic)](https://jwt.io/) [![JavaScript engine.](https://img.shields.io/badge/Sequelize-blue&style=plastic)](https://nodejs.org/en/)[![DB.](https://img.shields.io/badge/DataBase-MySQL-blue?logo=MySQL&style=plastic&labelColor=white)](https://jwt.io/)

## Table des matières

- [Versioning](https://github.com/Hess-Gregory/uaplv#versioning)
- [Équipe](https://github.com/Hess-Gregory/uaplv#equipe)
- [Contribuant](https://github.com/Hess-Gregory/uaplv#contribuant)
- [Auteur](https://github.com/Hess-Gregory/uaplv#autheur)
- [Installation](https://github.com/Hess-Gregory/uaplv#installation)
- [Caractéristiques](https://github.com/Hess-Gregory/uaplv#caractéristiques)
- [Contribuant](https://github.com/Hess-Gregory/uaplv#contribuant)
- [Support](https://github.com/Hess-Gregory/uaplv#support)
- [Contact](https://github.com/Hess-Gregory/uaplv#contact)
- [Licence](https://github.com/Hess-Gregory/uaplv#licence)
- [Remerciements"](https://github.com/Hess-Gregory/uaplv#remerciements)

---

<a name="versioning"></a>

## Versioning

Nous utilisons GitHub pour la gestion des versions. Pour les versions disponibles, voir les Tags sur ce [référentiel](https://github.com/Hess-Gregory/uaplv/tags).

<a name="équipe"></a>

## Équipe

<a name="autheur"></a>

### Auteur

- **HESS Gregory** - _Full Stack Developer_ - [FullHestack](https://github.com/Hess-Gregory)

<a name="contribuant"></a>

### Contribuant

Voir aussi la liste des [contributeurs](https://github.com/Hess-Gregory/uaplv/graphs/contributors) ayant participé à ce projet.

<a name="installation"></a>

## Installation

### Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v12.x.x` and npm `6.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `un_ami_pour_la_vie`).
```shell
git clone https://github.com/Hess-Gregory/un_ami_pour_la_vie
cd un_ami_pour_la_vie
```

### 1 - Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```
### 2 - Installation of the database

*  A (Create a new MySQL database):
"un_ami_pour_la_vie"

*  B (FInd the two SQL files in folder):

> /TABLESQL/[DEV]/DATA/ALL-DATA/20200520_1642_allData.sql

> /TABLESQL/[DEV]/TABLE/ALL-TABLE/20200520_1644_allTable.sql

* C (And import them into MySQL)

### 3 - Install npm packages for Backend and Frontend folder

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

For Backend (API):

```shell
cd Backend
npm install
pm2 start server.js --name NodeServer --log-date-format 'DD/MM HH:mm:ss' --watch
pm2 logs
```

For Frontend (Angular):

```shell
cd..
cd Frontend
npm install
ng serve --proxy-config proxy.conf.json --open --port 4300
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

Shut it down manually with `Ctrl-C`.

You're ready to write my application.


### 4 - Connection
email :
* `test@test.com`

Password:
* `123456`

<a name="caractéristiques"></a>

## Caractéristiques

<a name="caractéristiques"></a>

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](https://github.com/Hess-Gregory/un_ami_pour_la_vie/blob/master/LICENSE) pour plus de détails.

<a name="support"></a>

## Support

Des problèmes avec cette page? Découvrez nos [documentation](https://help.github.com/categories/github-pages-basics/).
<a name="contact"></a>

## Contact

[contact](https://github.com/contact) ici nous vous aiderons à résoudre votre problèmes.

<a name="remerciements"></a>

## Remerciements

### [Asile18](https://github.com/Asile18) - Design Logo
