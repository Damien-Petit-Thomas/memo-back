# backend memo : le backend de mon application de prise de note 

pour installer cette application 
le plus simple : utiliser les containers prévus à cet effet: voir  répo [memo_db_compose](https://github.com/Damien-Petit-Thomas/memo_db_compose) qui contient les dockerfiles pour le container de la bdd , du serveur apache ainsi que le  docker-compose



## endpoints



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
|/api/tag/ | tagController | GET | get all tags |
|/api/tag/ | tagController  | POST | create a tag|
|/api/tag/:id   | tagController | PATCH | update a tag |
|/api/tag/:id | tagCOnroller  | GET | get one tag  |  
|/api/tag/:id  | tagController | DELETE | delete a tag |
|/api/memo/ | memoController | GET | get all memos |
|/api/memo/ | memoController  | POST | create a memo|
|/api/memo/:id   | memoController | PATCH | update a memo |
|/api/memo/:id | memoCOnroller  | GET | get one memo  |
|/api/memo/:id  | memoController | DELETE | delete a memo |




en cours de redaction...