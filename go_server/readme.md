# Go Server

Server in golang for jokes, books similar to node server

```sh
go run main.go
```

## Task1: Write docker file

1. It is written in go using [gorilla mux](https://github.com/gorilla/mux), visit it's repository

2. Visit [golang](https://hub.docker.com/_/golang/) dockerhub

3. Steps to write a docker file

```txt
1. Fetch the image

2. Decide a work dir in docker container

3. Build or cache dependances

4. Expose the port

5. Final RUN command
```

## Task2: Write a manifest for k8s

1. Service & a pod manifest

2. The Image pull policy should be set to never

3. Start writing it by refering the [docs](https://kubernetes.io/docs/tasks/run-application)
