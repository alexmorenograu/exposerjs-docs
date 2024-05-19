# Introduction

## exposer.run params

Now, exposer.run use object params:

Before
```js
exposer.run(PrismaClient, config, app);
```

After
```js
exposer.run({ PrismaClient, config, app });
//or
exposer.run({PrismaClient}); //PrismaClient is required
```
