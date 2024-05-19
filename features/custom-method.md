# Custom method

## Add your custom method

### Create file

In this example, create myCustomMethod.js file
With the use of exposer.use({methodObject}), you can add custom routes

Example data (Fields requireds are highlighted):

```js{2,8}
{
    Model: is the Prisma model (table) to which the method will be added.
    Accepts: parameters to validate with AJV
    Return: expected response validated with AJV
    http: (Add only if you want to deploy the route) information to lift the route.
        path: route that will be added to the model (users/getUser)
        verb: type of request (GET, POST, PUT, PATCH, DELETE)
    [Method name]: method name
}
```

### Example

```js
import { exposer } from "exposerjs";

exposer.use({
  model: "myModel",
  accepts: {
    type: "object",
    properties: {
      id: { type: "integer" },
      name: { type: "string" },
    },
    required: ["id"],
  },
  returns: {},
  http: {
    path: `/getUser`,
    verb: "GET",
  },
  getUser,
});

async function getUser(ctx, id, name) {
  const user = await ctx.exposer.user.findUnique({
    select: {
      id: true,
      name: true,
    },
    where: {
      id: ctx.params.id,
    },
  });
  console.log(id, "← id →", user.id);
  console.log(name, "← name →", user.name);
}
```

### In front-end:

You can make the request

```js
myRequets(/api/users/getUser, {id, name})
```

Or

```js
const params = encodeURIComponent(JSON.stringify({ id: 1, name: 'exposer' }))
myRequets(/api/users/getUser?params=${params})
```

### In back-end:

```js
await ctx.exposer.user.getUser(ctx, id, name);
```

### Import in index file

```js{3}
import { exposer } from "exposerjs";
import { PrismaClient } from "@prisma/client";
import myCustomMethod from "./myCustomMethod.js";

exposer.run({PrismaClient});
```

### 🎉Your first custom method is added!
