
# introduction

This project is a website (under Angular 8), for an animal association, it has an administrator interface for managing staff and managing animals.
Visitors to the site can report a lost animal, this report will be entered in the database with the characteristics of the animal as well as its identification number (electronic chip).
If the lost animal is already in the shelter, the owner receives an alert on his screen when the report is finalized.
Visitors to the site can report an animal found, this report will be confused with the database in order to verify if the animal has not been declared as "lost". If this is the case, the association will be notified as well as its owner.
All animals in the shelter will be followed by the approved veterinarian. Each animal has its identity card and medical report in the application database, this has, in fact, that the veterinarian can be alerted of the animal is in poor health, reported directly by the staff of the shelter animale.


We are looking for volunteers to work on this project.
If you have in-depth knowledge of Angular and NodeJS, you are welcome.
You can contact me, see at the bottom of the page.

The association is registered by a VAT number in Belgium under the status of "ASBL"
Any financial donation will be welcome so that the association can see the light of day, the association is also looking for one ground in Wallonia (Belgium). -> www.unamipourlavie.be


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

Nous utilisons GitHub pour la gestion des versions. Pour les versions disponibles, voir les Tags sur ce [référentiel](https://github.com/Hess-Gregory/un_ami_pour_la_vie/tags).

<a name="équipe"></a>

## Équipe

<a name="autheur"></a>

### Auteur

- **HESS Gregory** - _Full Stack Developer_ - [FullHestack](https://github.com/Hess-Gregory)

<a name="contribuant"></a>

### Contribuant

- **HESS Gregory** - _Full Stack Developer_ - [FullHestack](https://github.com/Hess-Gregory)

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

### Create a new project based on the un_ami_pour_la_vie

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

## Directory Layout
```
├───e2e
│   └───src
│       └───.history
└───src
    ├───.history
    │   ├───app
    │   │   ├───admin
    │   │   │   ├───dashboard
    │   │   │   └───users
    │   │   │       └───users-manager
    │   │   │           ├───user-add
    │   │   │           ├───user-controls
    │   │   │           ├───user-detail
    │   │   │           └───user-update
    │   │   └───shared
    │   │       ├───exports
    │   │       ├───modules
    │   │       │   └───control-avatar
    │   │       └───validators
    │   └───environments
    ├───app
    │   ├───.history
    │   │   ├───home
    │   │   │   └───components
    │   │   │       └───navbar
    │   │   └───layout
    │   │       ├───components
    │   │       │   └───sidebar
    │   │       └───users
    │   │           └───users-manager
    │   ├───access-denied
    │   ├───admin
    │   │   ├───blank-page
    │   │   ├───breadcrumb
    │   │   ├───bs-component
    │   │   │   └───components
    │   │   │       ├───alert
    │   │   │       ├───buttons
    │   │   │       ├───collapse
    │   │   │       ├───date-picker
    │   │   │       ├───dropdown
    │   │   │       ├───modal
    │   │   │       ├───pagination
    │   │   │       ├───pop-over
    │   │   │       ├───progressbar
    │   │   │       ├───rating
    │   │   │       ├───tabs
    │   │   │       ├───timepicker
    │   │   │       └───tooltip
    │   │   ├───bs-element
    │   │   ├───charts
    │   │   ├───components
    │   │   │   ├───header
    │   │   │   └───sidebar
    │   │   ├───dashboard
    │   │   │   └───components
    │   │   │       ├───chat
    │   │   │       ├───notification
    │   │   │       └───timeline
    │   │   ├───form
    │   │   ├───grid
    │   │   ├───tables
    │   │   └───users
    │   │       ├───address-book
    │   │       ├───admin-manager
    │   │       ├───services
    │   │       │   └───jumbo-user
    │   │       ├───users-activate
    │   │       ├───users-info
    │   │       ├───users-list
    │   │       └───users-manager
    │   │           ├───user-add
    │   │           ├───user-controls
    │   │           ├───user-delete
    │   │           ├───user-detail
    │   │           └───user-update
    │   ├───home
    │   │   ├───components
    │   │   │   ├───footer
    │   │   │   ├───header
    │   │   │   ├───navbar
    │   │   │   └───timer
    │   │   └───homepage
    │   ├───login
    │   ├───not-found
    │   ├───server-error
    │   ├───shared
    │   │   ├───exports
    │   │   ├───guard
    │   │   ├───modules
    │   │   │   ├───auto-refresh
    │   │   │   ├───control-avatar
    │   │   │   ├───drag-drop-unique
    │   │   │   ├───language-translation
    │   │   │   ├───page-header
    │   │   │   ├───stat
    │   │   │   └───_modal
    │   │   ├───pipes
    │   │   ├───services
    │   │   ├───validators
    │   │   └───validatorsform
    │   └───signup
    ├───assets
    │   ├───i18n
    │   └───images
    │       ├───about
    │       ├───carousel
    │       ├───logos
    │       ├───portfolio
    │       └───team
    ├───environments
    └───styles
        └───bootstrap
            ├───mixins
            └───utilities
```

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](https://github.com/Hess-Gregory/un_ami_pour_la_vie/blob/master/LICENSE) pour plus de détails.

<a name="support"></a>

## Support

Des problèmes avec cette page? Découvrez nos [documentation](https://help.github.com/categories/github-pages-basics/).
Des problèmes avec ce repo? Contactez-moi (https://www.hess-gregory.be/).

<a name="contact"></a>

## Contact
info@hess-gregory.be
[contact](https://github.com/contact) ici nous vous aiderons à résoudre votre problèmes.

<a name="remerciements"></a>

## Remerciements

### [Asile18](https://github.com/Asile18) - Design Logo
