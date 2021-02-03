Docker Kuebrnetes
==========================

Basic steps to start deploying in docker containers and Kubernetes containers management tool.

###### What's Docker
Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. 
Containers allow a developer to package up an application with all of the parts it needs, 
such as libraries and other dependencies, and ship it all out as one package.

Docker is based on images, that be configured, customized and shared. Some awsome images are
available in [Docker Hub](https://hub.docker.com//).


###### What's Kubernetes
Kubernetes is a cluster and container management tool, open-sourced by Google in 2014. It provides a 
platform for automating deployment, scaling, and operations of application containers like Docker across clusters of hosts.

- install Docker
```
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
```


- install Kubernetes
```
   sudo apt-get update && sudo apt-get install -y apt-transport-https
   curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
   echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
   sudo apt-get update
   sudo apt-get install -y kubectl
   kubectl version --client
```

###### What's Minikube
Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node 
Kubernetes cluster inside a Virtual Machine (VM) on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

```
  curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \ && chmod +x minikube
  sudo mkdir -p /usr/local/bin/
  sudo install minikube /usr/local/bin/
  minikube start
```




