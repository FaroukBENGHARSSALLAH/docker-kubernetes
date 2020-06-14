FROM openjdk:8-alpine
COPY target/backend.jar /backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend.jar"]