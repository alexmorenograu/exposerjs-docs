# ACLs System

## Explanation

In order to be able to restrict routes based on roles we have created this ACL system

## Types

Exposer has 4 ways to use ACLs to adapt to the needs of each project.
Select mode in [config.js → aclType](/features/default-config.md).
They are ordered from most to least fast.

|                                        | fast | fast&db | cache | db  |
| -------------------------------------- | ---- | ------- | ----- | --- |
| Get acls from code                     | ✅   | ✅      | ✅    | ✅  |
| Get acls from db when it starts        | ❌   | ✅      | ✅    | ❌  |
| Implement routes to get the acls again | ❌   | ❌      | ✅    | ❌  |
| Get acls for each request              | ❌   | ❌      | ❌    | ✅  |

### Fast

This mode is perfect if what you are looking for is maximum speed, by adding acls in the code.
What ExposerJS does is when it is deployed, it loads all the acls to be able to consult them in the fastest and most efficient way.

::: info Set mode
This is default mode
:::

### Fast&DB

This mode is perfect if what you are looking for is maximum speed but adding the versatility of being able to load the database acls at the backEnd.

::: info Set mode
"aclType": "fast&db"
:::

### Cache

This does the same as the Fast&DB mode but displays a route that allows it to regenerate the ACLS when called, re-obtaining the data from the database in case there have been updates.
This allows you to add new acls to the database and make the request to refresh them.

::: info Set mode
"aclType": "cache"
:::

### DB

This mode is perfect if you want to be able to make changes to the database and have them applied instantly. T
his has a speed cost, requiring all acls to be obtained for each request to the backend.

::: info Set mode
"aclType": "db"
:::

## Adding in the code

::: info Global 'allows':
Use '\*' for all roles.
<br>
Use '$' for all (example signIn, signUp, ...).
:::

Add in method:

```js{7}
import { exposer } from "exposerjs";
exposer.use({
  model: "myModel",
  accepts: {},
  returns: {},
  http: {},
  allow: ['myRole']
  myMethod,
});
```

Use model file:

```js
import { acl } from "exposerjs";
acl.addModel("myModel", [
  ["findMany", "myRoleOne"],
  ["create", ["myRoleOne", "myRoleTwo"]][("upsert", "*")][
    ("myCustomMethod", "$")
  ],
]);
```
