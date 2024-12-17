https://github.com/datocms/cli/issues/19

steps to reproduce

- `npm i`
- make a datcms project. add a simple schema to main
- fork main, call it develop
- make a schema change in develop
- create `.env` and add DATOCMS_API_TOKEN=[your-token]
- `npx datocms migrations:new --autogenerate=develop:main test`

This yields the following error for me:

```
Error: require() of ES Module /Users/luuk/development/datocms-cli-migration-issue/node_modules/prettier-plugin-tailwindcss/dist/index.mjs
not supported.
Instead change the require of /Users/luuk/development/datocms-cli-migration-issue/node_modules/prettier-plugin-tailwindcss/dist/index.mjs to
    a dynamic import() which is available in all CommonJS modules.
Code: ERR_REQUIRE_ESM
```

Downgrading @datocms/cli to 2.0.14 gets rid of the error:

- `npm install --save-dev @datocms/cli@2.0.14`
- `npx datocms migrations:new --autogenerate=develop:main test`
