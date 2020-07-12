Kuebrnetes
==========================

Basic steps to start deploying in Kubernetes containers management tool.

To deploy on the Kubernetes : 
```
kubectl create -f mongo.yaml
kubectl create  -f  backend.yaml
kubectl create  -f  nginx.yaml

kubectl get pods

kubectl create  -f  mongo-service.yaml
kubectl create  -f  backend-service.yaml
kubectl create  -f  nginx-service.yaml

kubectl get service
```



