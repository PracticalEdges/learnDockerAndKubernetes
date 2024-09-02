# React + Express App

To start server run

```
npm run dev
```

To start frontend run

```
npm run start
```

To start database

```
cd dev
docker compose up -d
```

## ENV to setup

```txt
REACT_APP_BACKEND_URL
DATABASE_URL
```

## Task1: fix a dockerfile & compose

1. Check The dockerfiles in the project

2. Visit [nodejs dockerhub](https://hub.docker.com/_/node/)

3. Instruction for dockerfile

## Task2: Write k8s manifest

1. Service + deployment

2. The Image pull policy should be set to never

3. Start writing it by refering the [docs](https://kubernetes.io/docs/tasks/run-application)

4. Also add volumes
