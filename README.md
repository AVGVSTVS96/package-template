## Minimal Package Template using PNPM, Biome, tsup, and TypeScript

This is a modern, minimal template for creating a package using [PNPM](https://pnpm.io/), [Biome](https://biomejs.dev/), [tsup](https://tsup.egoist.dev/), and [TypeScript](https://www.typescriptlang.org/).

## Checklist

- [ ] Update all `TODO:`
- [ ] Update all `package-name` occurences
- [ ] Add a LICENSE.md at the root
- [ ] Have gh cli installed
- [ ] Develop the package logic (see [development](#development) below)
- [ ] Work on docs
  - [ ] JSDoc
  - [ ] [Package README](/package/README.md) (symlink to [root](README.md) for single package repos)
- [ ] Format/lint (see [development](#development) below)
- [ ] Release (see [publish](#publish) below)
- [ ] Share!

## Usage
### Development:
```bash
# Run these commands from the root directory
 
# Install dependencies
pnpm install

# Lint and format code
pnpm lint
pnpm lint:fix
pnpm format

# Run development server
# When run in repo root, starts the dev and watch
#  scripts in all sub directories recursively
#  (/package, /playground)
pnpm dev
```

### Package:
```bash
# Build package
pnpm build            # from package directory
pnpm package:build    # from root directory

# Run `tsup --watch`
pnpm dev              # from package directory
pnpm package:dev      # from root directory
```

### Playground:
```bash
# Build playground
pnpm build            # from playground directory
pnpm playground:build # from root directory

# Start playground
pnpm dev              # from playground directory
pnpm playground:dev   # from root directory
```

### Publish:
```bash
# Run these commands from the root directory

# Create a changeset with changes that should 
#  bump the version number (patch, minor, major)
pnpm changeset

# Release the package and publish to NPM
# Runs the release script in `release.mjs`
#  Versions package
#  Generates changelog from changesets
#  Builds package and publishes to NPM
#  Creates a GitHub release
pnpm release
```