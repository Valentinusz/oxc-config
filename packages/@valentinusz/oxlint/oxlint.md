# Oxlint configurations

This folder contains various packages that define oxlint configuration.

## Adding rules

Each rule should be placed in the appropriate config file by plugin and category.

### Config types

#### Root config

The root oxlint config exposed by the package should be placed in `index.ts`. This file is responsible for extending the
configuration provided by plugin config files.

#### Plugin config

Plugin configurations are located in their respective folder in `plugins` folder of the package. They are responsible
for extending the configuration provided by category config files.

E.g. config for eslint plugin should be located in the `plugins/eslint` folder.

Plugin config file names must follow this pattern:

```text
{category-name}.plugin.ts
```

E.g. `eslint.plugin.ts`.

### Category config.

Oxlint defines the following categories for rules:
- Correctness
- Suspicious
- Pedantic
- Perf
- Style
- Restriction
- Nursery

A category config file should be created if the given plugin has any rules in that category.

Category config names should follow this pattern:

```text
{plugin-name}.{category-name}.ts
```

E.g. eslint.pedantic.ts

##### Nursery rules

Nursery rules are special, because they are in active development. As such they might subject to change and removal in
any given update.

Special attention must be given to nursery rules:
- if a nursery rule is removed it shall be removed from the file
  - if no rules remain the nursery rule config file, and it's inclusion in the category config file shall be removed
- if a nursery rule is made standard it should be moved to its new category

#### Plugin config

E.g. given the `eslint` plugin the following structure is expected:

```text
/ package root
└── src
    ├── index.ts
    └── plugins
        └── eslint
            ├── eslint.plugin.ts
            ├── eslint.correctness.ts
            ├── eslint.pedantic.ts
            └── eslint.suspicious.ts
```

A rule file should be created even if it would contain no active rules.

`eslint.config.ts` in this case is the root config for the plugin.

If there are only a few rules for the given plugin you can put all rules in the same file.

E.g.:
- `jsx-a11y.plugin.ts`
- `react-perf.plugin.ts`