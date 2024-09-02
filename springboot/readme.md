# Springboot Application

- JAVA SPRINGBOOT APPLICATION for jokes & books

Run app

```
java -jar ./target/myproject-0.0.1-SNAPSHOT.jar
```

## TASK1: Write a dockerfile

1. Try to build the project using maven even on local will work

2. Visit openjdk on [dockerhub](https://hub.docker.com/_/openjdk/)

3. Instructions for dockefile

```txt
1. Fetch the image

2. Decide a work dir in docker container

3. Build or cache dependances

4. Expose the port

5. Final RUN command
```

## Task2: Write k8s manifest

1. Service + deployment

2. The Image pull policy should be set to never

3. Start writing it by refering the [docs](https://kubernetes.io/docs/tasks/run-application)
