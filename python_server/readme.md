# Python Server

A flask server that is build using the [pokeapi](https://pokeapi.co/)

## Task1: Write a dockerfile

1. We are working here with pipenv not requirements.txt Learn about [pipenv](https://pypi.org/project/pipenv/)

2. Instead of python run command will be pipenv run. Also visit [python dockerhub](https://hub.docker.com/_/python)

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
