# User methods

## View code

In order to be able to support other ORMs in the future, we have separated all the prism code to [ExposerJS-ORM-Prisma](https://github.com/alexmorenograu/exposerjs-orm-prisma).

::: tip Github
To see the internal code of the methods you can see it from here [Github ExposerJS-ORM-Prisma](https://github.com/alexmorenograu/exposerjs-orm-prisma/tree/master/src/user)
:::

## signIn

```js
export default {
  model: "user",
  accepts: {
    type: "object",
    properties: {
      id: { type: ["integer", "null"] },
      name: { type: ["string", "null"] },
      password: { type: "string" },
    },
    required: ["password"],
  },
  returns: {
    type: "object",
  },
  allow: "$",
  http: {
    path: `/signIn`,
    verb: "GET",
  },
};
```

## signUp

```js
export default {
  model: "user",
  accepts: {
    type: "object",
    properties: {
      name: { type: "string" },
      password: { type: "string" },
    },
    required: ["name", "password"],
  },
  returns: {
    type: "object",
  },
  allow: "$",
  http: {
    path: `/signUp`,
    verb: "POST",
  },
};
```
