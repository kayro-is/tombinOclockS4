Notion de cours :


Méthodologie de projet dite classique :

Cahier des charges :
- c'est un document contractuel qui définit toute l'application qui va être développer. On le formalise avec le client. Il est écrit en langage naturel. Il doit être clair et précis. Il doit être signé par le client et le développeur.

Méthodes agile :

https://manifesteagile.fr/

Méthodologie Scrum :

Rôle :

Scrum master : S'assure que l'équipe respecte les principe scrum. Il facilite les interractions dans l'équipe.
Product Owner : Représente le client, il définit les fonctionnalité dz l'application et il établit les priorité de développement.
Equipe de dévloppement : Les professionnel qui réalise l'application

Les cérémonies :

Sprint : Période de temps définit à l'avance (2 semaines) pendant laquelle on développe l'application.
Planification : Réunion ou l'équipe selectionne les fonctionnalités qui vont être implémenter durant le sprint
Scrum quotidien ou daily : Brêve réunion pour faire le point sur les avancées.
Revue de sprint : Présentation du travail et recueil des retours.
Rétrospéctive de sprint : Réunion pour discuter de ce qui a bien fonctionné, faire le bilan.

Artefact :

backlog : la liste des fonctionnalité à intégrer.



Pour démarrer le projet :

git init : Prémet d'itialiser un dépot git en local.

git remote add origin <urlDepotDistant> : ajouter le dépot distant au local

git branch -M main : Permet de renommer la branche conformément à github.

git add . : Permet de tracker tous les fichier et dossier.

git commit -m 'nom du commit' : Permet d'ajouter les fichier à la sauvegarde, -m permet de nommer le sauvegarde

git push -u origin main : Permet d'ajouter le dépot local au dépot en ligne. Vers le remote origin depuis le branch main

git remote show : Permet de savoir quel dépot distant est rélié à notre dépot local

git remote get-url <nomDepotDistant> : Permet de voir l'url


Visual studio et git :

Une fois un dépot git intialisé, visual studio nous aide à savoir ce qui est pris en compte dans ce dépot.

A à côté signifie que le fichier et ajouté dans le traking de git.
M dit que le fichier à été modifié depuis le dernier add ou le dernier commit
U signifi que le fichier q été ajouter depuis le dernier commit.
Lorsqu'un dossier est grisé cela signifie qu'il est ignoré par le tracking et donc qu'il est présent dans le fichier gitignore.


Les user story :

Format de conception centré sur les utilisateur. il est pratique car il permet d'être précis. On peut le faire sans maquette graphique.

Wireframe :
Un guide visuel simplifiée. permet de se faire une première idée de ce que va donner l'aplicaiton d'un point de vue visuel.