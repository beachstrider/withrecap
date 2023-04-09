# reCap

Meeting notes, on autopilot.

## Getting started

### Prerequisites

1. Yarn v1 (https://yarnpkg.com)

   - This Project uses yarn workspaces (https://classic.yarnpkg.com/lang/en/docs/workspaces/)

2. NodeJS v18 (https://nodejs.org)

### Commands

_Note: The commands listed below are for the repository only. Go inside each packages to find out more about individual commands that a package supports_

Install dependencies

_Note: Dependencies can be installed from anywhere since we are using yarn workspaces_

```sh
$ yarn install
```

Lint

```sh
$ yarn eslint
```

Format

```sh
$ yarn prettier
```

To fix the formatting issues you can run:

```sh
$ yarn prettier:fix
```

### Structure

All the code can be found in the `packages/` directory and is split like so:

- `/packages`
  - `app` - The reCap web application
  - `app-old` - [DEPRECATED] The reCap web application
  - `extensions` - contains the code for the Browser Extension
  - `functions` - list of Firebase Functions
  - `shared` - a library of front-end components and reusable code
