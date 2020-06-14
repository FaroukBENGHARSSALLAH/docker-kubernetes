Docker Compose
==========================

A docker compose file to synchronise deploying a MongoDB, Spring Boot and ReactJS projects as docker containers.


###### Start deploying
Clone the project repository.

- navigate to the docker folder
```
  git clone https://github.com/FaroukBENGHARSSALLAH/docker-kubernetes.git
  cd docker-kubernetes
  cd docker
```


- Customization
You can change parameters in the docker compose file; ports, name, volumes..
```
   vim docker-compose.yml
   
```

###### Starting

```
  docker-compose up
```

  To check if the backend part is working, populate the database by typing
```
 wget http://localhost:8080/api/pop .
```

To check if the frontend part is working, type
```
wget http://localhost:3200/
```

