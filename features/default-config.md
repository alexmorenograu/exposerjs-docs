# Default config

## Example config.json with default config

```json
 {
  prefix: "/api",
  verbs: {
    get: {
      findUnique: "/:id",
      findMany: "",
      findFirst: "/first",
      count: "/count",
      aggregate: "/aggregate",
      groupBy: "/groupBy",
    },
    post: {
      create: "",
    },
    put: {
      upsert: "",
    },
    patch: {
      update: "/:id",
      updateMany: "/update",
    },
    delete: {
      delete: "/:id",
      deleteMany: "",
    },
  },
  tokenVerify: true,
  tokenKey: "EXPOSER_TOKEN_KEY",
  aclVerify: true,
  aclType: "fast",
  userModel: {
    roleId: "roleId",
    defaultRoleId: 1,
  },
  roleModel: {
    tableName: "role",
    id: "id",
    name: "name",
  },
  aclModel: {
    tableName: "acls",
    model: "model",
    name: "name",
    allow: "allow",
  },
};
```

# Use in exposer.run

```js
/* More code */
const myConfig = { prefix: "/api" };
exposer.run(PrismaClient, null, myConfig);
```

# Properties explained

## Prefix

Add prefix in your methods

```
/[prefix]/[model]/[methodName] → /api/users/addUser
```

## Verbs

Add methods http with [Prisma model queries](https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries)

Request:

```sh
GET /api/users/1
```

Executed:

```js
return prisma.user.findUnique({
  where: {
    id: 1,
  },
});
```

## TokenVerify (Enable by default)

Choose whether you want token validation enabled before executing each method.
::: tip JsonWebToken
For token management we use [JsonWebToken](https://github.com/auth0/node-jsonwebtoken#readme) internally
:::

## TokenKey

::: danger TokenKey
We recommend changing the key
:::
Choose your token key with which tokens are generated for users.

## AclVerify & AclType

Choose whether you want acl validation enabled before executing each method.
::: tip AclTypes
View more in [Acls Section](/features/acls.md)
:::

## [table]Model

If you use a different table structure you can indicate it here.

### Example

If your acl's table is this:

```sql
model userrestriction {
  id          Int      @id @default(autoincrement())
  rolefk      Int
  section     String   @db.VarChar(25)
  route       String?  @db.VarChar(25)
}
```

You pass this in configuration:

```js
exposer.run(PrismaClient, null, {
  aclModel: {
    tableName: "userrestriction",
    model: "section",
    name: "route",
    allow: "rolefk",
  },
});
```
