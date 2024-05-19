# Getting Started

## Creating a ExposerJS Application

## Installation

::: code-group

```sh [npm]
$ npm install exposerjs
```

```sh [pnpm]
$ pnpm install exposerjs
```

```sh [yarn]
$ yarn install exposerjs
```

```sh [bun]
$ bun install exposerjs
```

:::

### Prerequisites

::: tip
ExposerJS requires a version equal to or greater than 18 of [Node.js](https://nodejs.org/) and 5.5.o or greater of [Prisma](https://www.prisma.io/).
You can try with older versions of both but we cannot ensure stability
:::

- [Node.js](https://nodejs.org/) version 18 or higher.
- [Prisma](https://www.prisma.io/) @prisma/client version 5.5.0 or higher.

### Prisma

ExposerJS only need prisma instance to access the database.

- [Prisma installation](https://www.prisma.io/docs/getting-started/quickstart)

## Create index file

Create file index.js add the code to start the project:

::: code-group

```js [Basic]
import { exposer } from "exposerjs";
import { PrismaClient } from "@prisma/client";
exposer.run({PrismaClient});
```

```js [With express instance]
import { exposer } from "exposerjs";
import { PrismaClient } from "@prisma/client";

//Express
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

exposer.run({PrismaClient, app}); // app → express

app.listen(port, () => {
  console.log(`Backend is ready ${port}`);
});
```

:::

Run in console:

```sh [Run in console]
  node index.js
```

Output expected:

```sh [Output expected]
  ExposerJS deployed in XXms
```

### 🎉Congratulations, your backend with ExposerJS is deployed!
