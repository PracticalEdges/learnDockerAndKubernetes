# Hono Server

It is a server for jokes & bokes name

## How to run?

Copy the below command & run it

```sh
deno task start
```

## TASK1: Writing dockerfile

1. Visit [deno website](https://docs.deno.com/)

2. Check for deno on [dockerhub](https://hub.docker.com/r/denoland/deno/)

3. Check deno.json whether there is a build command or not

4. Explore the Server locally because if it runs on local then it can be dockerize

5. Procced to write the dockerfile

```steps
1. Fetch the image

2. Decide a work dir in docker container

3. Build or cache dependances

4. Expose the port

5. Final RUN command
```

6. Build the image

```sh
docker buildx build . -t hono-server
```

7. Run it 

```sh
docker run -p 8000:8000 -d hono-server
```

## TASK2: Writing K8s Manifest

1. Make sure you have docker image built with you

2. While writing k8s manifest we need to pay attension to selector, server & deployment

3. The Image pull policy should be set to never

4. Start writing it by refering the [docs](https://kubernetes.io/docs/tasks/run-application)

