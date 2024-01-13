# Introduction

## What is ExposerJS?

ExposerJS is an API generator based on Express and Prisma. It deploys a route for each Prisma method. It also allows you to add custom methods and deploy them in a simple way, providing everything you need. It has the ability to use parameter validation (AJV), restriction checking (ACLs), and token validation (jsonwebtoken).

A quick look:

```js
import { exposer } from "exposerjs";
import { PrismaClient } from "@prisma/client";
exposer.run(PrismaClient);
```

## Why ExposerJS?

Exposer gives the possibility of deploying an API from the database structure.
Use the most used router and one of the most used ORMs to cover the most users and projects.
It also offers basic functionality such as various ACL restriction modes.

Inspired by loopback 3.
::: info Schema
![Example](/example.png)
:::

::: code-group

```sh [npm]
$ npm install exposerjs
```
