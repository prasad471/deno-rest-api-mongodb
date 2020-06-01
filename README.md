# Deno REST API
> This is a simple CRUD application using deno and MongoClient

## Run
```
deno run --allow-net --allow-write --allow-read --allow-plugin --unstable server.ts
```

## Routes
```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
```
