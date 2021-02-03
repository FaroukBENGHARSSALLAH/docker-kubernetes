docker
==========================

You can build the spring boot project in a docker images using the docker file in the project folder using this commands

```
sudo docker build -t demo:v1 .
```

To run it type
```
sudo docker run -d -p 8082:8080 demo
```

Open the browser on localhost:8082 on you will get 
```
The site is working
```

###### Notes : 
  In the  project 's docker file, we have set port using EXPOSE to 8080. We access the site
from the outside using 8082 ; localhost:8082 as the docker engine will translate the request coming from 8082 to the 'demo' 
8080 port container. 