# backend memo : application de prise de note 

pour installer cette application 
le plus simple : utiliser les containers prévus à cet effet: coir  répo [memo_db_compose](https://github.com/Damien-Petit-Thomas/memo_db_compose) qui contient les dockerfiles pour le container de la bdd , du serveur apache et donc le fichier docker-compose



architecture classique API rest  je me suis amusé à dynamiser avec la presence de : coredatamepper corecontroller corerouter



|route | controller | method | description |
|------|------------|--------|-------------|
|/api/tag/ | tagController | GET | get all tags |
|/api/tag/ | tagController  | POST | create a tag|
|/api/tag/:id   | tagController | PATCH | update a tag |
|/api/tag/:id | tagCOnroller  | GET | get one tag  |
|/api/tag/:id  | tagController | DELETE | delete a tag |
|/api/category/ | categoryController | GET | get all categorys |
|/api/category/ | categoryController  | POST | create a category|
|/api/category/:id   | categoryController | PATCH | update a category |
|/api/category/:id | categoryCOnroller  | GET | get one category  |
|/api/category/:id  | categoryController | DELETE | delete a category |

to be continued ...