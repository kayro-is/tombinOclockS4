# Notion de cours :


## Methodo Projet

### Méthodologie de projet dite classique ou en cascade ou waterfall :

Cahier des charges :
- c'est un document contractuel qui définit toute l'application qui va être développer. On le formalise avec le client. Il est écrit en langage naturel. Il doit être clair et précis. Il doit être signé par le client et le développeur.

C'est une méthodlogie qui se concentre sur le processus de production.


### Méthodes agile :

https://manifesteagile.fr/

C'est une methodologie qui se concentre sur els interractions humaine. Cela permet un développement itératif (petit à petit).

#### Méthodologie Scrum :

##### Rôle :

Scrum master : S'assure que l'équipe respecte les principe scrum. Il facilite les interractions dans l'équipe.
Product Owner : Représente le client, il définit les fonctionnalité de l'application et il établit les priorité de développement.
Equipes de dévloppement : Les professionnels qui réalisent l'application

##### Les cérémonies :

Sprint : Période de temps définit à l'avance (2 semaines) pendant laquelle on développe l'application.
Planification : Réunion ou l'équipe selectionne les fonctionnalités qui vont être implémenter durant le sprint
Scrum quotidien ou daily : Brêve réunion pour faire le point sur les avancées.
Revue de sprint : Présentation du travail et recueil des retours.
Rétrospéctive de sprint : Réunion pour discuter de ce qui a bien fonctionné, faire le bilan.

##### Artefact :

backlog : la liste des fonctionnalités à intégrer.

---

## Pour démarrer le projet :

git init : Prémet d'itialiser un dépot git en local.

git remote add origin <urlDepotDistant> : ajouter le dépot distant au local

git branch -M main : Permet de renommer la branche conformément à github.

git add . : Permet de tracker tous les fichier et dossier.

git commit -m 'nom du commit' : Permet d'ajouter les fichier à la sauvegarde, -m permet de nommer le sauvegarde

git push -u origin main : Permet d'ajouter le dépot local au dépot en ligne. Vers le remote origin depuis le branch main

git remote show : Permet de savoir quel dépot distant est rélié à notre dépot local

git remote get-url <nomDepotDistant> : Permet de voir l'url


### Visual studio et git :

Une fois un dépot git intialisé, visual studio nous aide à savoir ce qui est pris en compte dans ce dépot.

A à côté signifie que le fichier et ajouté dans le traking de git.
M dit que le fichier à été modifié depuis le dernier add ou le dernier commit
U signifi que le fichier q été ajouter depuis le dernier commit.
Lorsqu'un dossier est grisé cela signifie qu'il est ignoré par le tracking et donc qu'il est présent dans le fichier gitignore.

---

## Conceptions :

### Les user story :

Format de conception centré sur les utilisateurs. Il est pratique car il permet d'être précis. On peut le faire sans maquette graphique.

### Wireframe :
Un guide visuel simplifiée. permet de se faire une première idée de ce que va donner l'application d'un point de vue visuel.


### kanban :
Le système Kanban est une méthode de gestion de projet et de suivi de la production. Elle a été développée à grande échelle dans les années 1950, au sein de l'industrie automobile japonaise. Ainsi, c'est Toyota qui fut la première entreprise à mettre à profit cette méthode.

### github project : 
Qui permet le suivi de projet en équipe avec un système de card attribuable à chaque membre de l'équipe.

---

## Variable d'environnement :

C'est un ensemble de valeur dynamique qui sont définit en fonction de l'environnement d'execution.
Sous nodeJs, le paquet qui nous permet de les utiliser s'appelle dotenv : https://www.npmjs.com/package/dotenv
Au début de notre application on a besoin de setup dotenv pas cette ligne : 
require('dotenv').config()

et on utilise les variable grave à process.env.<nomVariable>

Elles sont stockées dans un fichier.env, celui-ci ne doit pas être présent sur notre dépot distant. On peut informer nos collégues sur les variables présentes dans l'application avec un fichier .env.example ou dans le readMe.

.gitignore 
Permet de faire ignorer des fichier et des dossier par le tracking git.

---

## ogarnisation du projet

Nous avons organiser les fichiers du projet.
Par convention le odssier controller contient la logique des router de l'appliation.
Le router permet de faire le lien entre les point d'entré et les controllers.
Les views affiche le resultat.