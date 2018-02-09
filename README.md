# boards-preset-aor

[Admin on rest](https://marmelab.com/admin-on-rest) preset for the [Boards CLI](https://github.com/SpoonX/boards-cli).

## Installing

`yarn global add boards-preset-aor` or `npm i -g boards-preset-aor`

## Quick start

To see this boards preset in action and create a fully functional dashboard in under 5 minutes, follow these steps:

1. `yarn global add boards-cli boards-preset-aor`
2. `boards aor:init my-project`
3. `cd my-project`
4. `boards aor:resource posts`
5. `boards aor:resource albums`
6. `yarn start`
7. Pick up your jaw, and get productive.

## Tasks

This preset adds the following tasks to your project.

### aor:init

Initializes a new Admin on Rest project.

`boards aor:init my-project`

### aor:resource

Create a full resource with edit, create, list and delete enabled. Also attaches resource to App.js.

`boards aor:resource resourceName`

### aor:list

Creates a new resource with only listing (readonly resource).

`boards aor:list resourceName`

### aor:edit

Adds edit to an existing resource that previously didn't have edit enabled.

`boards aor:edit resourceName`

### aor:create

Adds create to an existing resource that previously didn't have create enabled.

`boards aor:create resourceName`

## License

MIT
