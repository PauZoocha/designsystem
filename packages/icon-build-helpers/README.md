# # ILO Design System - Icon Build Helpers

## Status: Proof of Concept

> Build helpers for ILO's Design System icon library

## Getting started

To install `@ilo/icon-build-helpers` in your project, you will need to run
the following command using [npm](https://www.npmjs.com/):

```bash
npm install -S @ilo/icon-build-helpers
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @ilo/icon-build-helpers
```

## Usage

`@ilo/icon-build-helpers` is a private module in the Carbon Design System
monorepo. The purpose of this module is to centralize tooling for:

- Searching a directory of `.svg` assets and structuring them in terms of size
  and prefixes
- Custom builders for various libraries, which currently include:
  - Vanilla
  - React
- Implementing repo status checks in CI around icon metadata files, namely
  `metadata.yml` and `categories.yml`

As a result, these file power the generation of the following SVG-based
projects:

- `@ilo/icons`
- `@ilo/icons-react`

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## 📝 License

Licensed under the [MIT](/LICENSE).
