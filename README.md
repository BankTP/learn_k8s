# Learn docker compose and k8s configuration 

this repository is me try to figure out how to config kubernetes and docker-compose based on some online course that I've learn from.

### prerequisit
 
- registry server on localhost:5000 ( https://docs.docker.com/registry/ )
- docker desktop
- kubernetes ( come with docker desktop )

### prepare frontend/backend image

1. docker build frontend and tag with `localhost:5000/learn/frontend`
2. docker build backend and tag with `localhost:5000/learn/backend`
