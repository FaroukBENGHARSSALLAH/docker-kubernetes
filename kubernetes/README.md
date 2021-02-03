Kuebrnetes
==========================

Basic steps to start deploying in Kubernetes containers management tool.

- To deploy on the Kubernetes : 
```
kubectl create -f mongo.yml
kubectl create  -f  demo.yml

kubectl get pods

kubectl create  -f  mongo-service.yml
kubectl create  -f  demo-service.yml
kubectl create  -f  demo-clusterip-service.yml

kubectl get service
```


- For the node port service you can make it work by typing

   
```
    minikube ip
    curl http://[minikube ip]:[nodePort] 
```

- For the clusterip service you can make it work by typing
```
     exec POD-ID
     curl http://[localhost]:[8080]  
```