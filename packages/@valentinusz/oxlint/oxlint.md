# Oxlint configurations

This folder contains various packages that define oxlint configuration.

## Configuration files

Each rule should be placed in the appropriate config file by plugin and category.

All oxlint configuration packages must follow this structure:

1. the entry is the `index.ts` file
2. for each plugin in use has a dedicated folder in `/plugins`. E.g. `plugins/eslint`
3. each plugin has a root file and a dedicated config file for each rule category. E.g.
4. `plugins/eslint/eslint.correctness.ts`

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

A rule file should be created even if it would contain no active rules, but it shouldn't be created when no rules exist
in the category or all rules in the category is enabled by default.

### Root config

The root oxlint config exposed by the package should be placed in `index.ts`. This file is responsible for extending the
configuration provided by plugin config files.

### Plugin config

Plugin configurations are located in their respective folder in `plugins` folder of the package. They are responsible
for extending the configuration provided by category config files.

E.g. config for eslint plugin should be located in the `plugins/eslint` folder.

Plugin config file names must follow this pattern:

```text
{category-name}.plugin.ts
```

E.g. `eslint.plugin.ts`.

### Category config

Oxlint defines the following categories for rules:

- Correctness
- Suspicious
- Pedantic
- Perf
- Style
- Restriction
- Nursery

A category config file should be created if the given plugin has any rules in that category (even if they are disabled).

Category config names should follow this pattern:

```text
{plugin-name}.{category-name}.ts
```

E.g. `eslint.pedantic.ts`.

#### Nursery rules

Nursery rules are special, because they are in active development. As such they might subject to change and removal in
any given update.

Special attention must be given to nursery rules:

- if a nursery rule is removed it shall be removed from the file
- if no rules remain the nursery rule config file, and it's inclusion in the category config file shall be removed
- if a nursery rule is made standard it should be moved to its new category

## Documenting rules

Rules must adhere to the following format:

```ts
// ❌ OR ✅ Rule name (the appropriate emoji should be chosen depending on whether the rule is enabled.
// Description (from oxlint website).
// Reason archetype (optional). Reason.
```

E.g.:

```ts
// ✅ eslint/no-else-return
// Disallow else blocks after return statements in if statements.
// 🏆 Best practice.
```

### Reason archetypes

Most rules are disabled or enabled for the same specific reason for these use the following archetypes:

- `➡️ Handled by <>.` if the rule is disabled because it is handled by another rule, TypeScript or the formatter.
- `🐛 Bug prevention.` if the rule is enabled to prevent a bug.
- `⚡ Performance.` if a rule enabled because it prevents a performance loss, or promote a more efficient solution.
- `🔒 Security.` if the rule is enabled to prevent a security problem
- `🏆 Best practice.` if the is enabled because it promotes best practices
- `⛓️ Too restrictive.` if the rule is disabled because it ties the hands of the programmer too much
- `📁 Project specific.` if the rule is disabled, because it is useful, but no reasonable default can be set, so it must be
  configured on a per-project basis.

### Overrides

If a rule also has overrides, mention this fact in the rule description.
