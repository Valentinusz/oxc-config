# Oxc Config

Oxc configuration for my personal projects.

## Packages

All packages are located in the [packages](./packages) directory. Packages are divided into two categories:

- packages in the `@internal` directory, must always be private and are meant to provide support for other packages
- packages in the `@valentinusz` directory, should not be private

### Internal packages

- [vite-config](./packages/@internal/vite-config): provides a shared vite configuration with reasonable default for
  building libraries

### Public packages

- [oxfmt](./packages/@valentinusz/oxfmt): provides configuration for oxfmt
- [oxlint](./packages/@valentinusz/oxlint): provides configuration for oxlint

## Developing

This repository uses pnpm for monorepo management, before interacting with the project install it.

Install dependencies using:

```shell
pnpm install
```

Build packages using:

```shell
pnpm run packages:build
```

### Dependencies

Dependencies are managed using pnpm. If a given dependency is used by multiple packages it's version should be recorded
in the catalog in [pnpm-workspace.yaml](./pnpm-workspace.yaml).

### Command reference
