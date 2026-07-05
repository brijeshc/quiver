# Releasing Quiver

Publishing to npm is automated by GitHub Actions.
You do not run `npm publish` by hand - you bump the version and push.

## How it works

The workflow at [`.github/workflows/publish.yml`](../.github/workflows/publish.yml) runs on every push to `main` that touches the package contents (`package.json`, `bin/`, `skills/`, `docs/`, `README.md`, `LICENSE`).

On each run it:

1. Reads `name` and `version` from `package.json`.
2. Checks whether that exact `name@version` is already on the npm registry.
3. **Publishes only if the version is new.** If the version already exists, it does nothing and succeeds.

This makes the workflow safe on every commit: ordinary commits are no-ops, and a release is simply a commit that bumps the version.

### Authentication: Trusted Publishing (OIDC), no stored token

The workflow authenticates with **npm Trusted Publishing over OIDC** - there is **no `NPM_TOKEN` secret** in the repo.
GitHub Actions mints a short-lived token, scoped to this repository and this workflow, for each run.

Why this is better than a long-lived automation token:

- **Nothing to steal.** There is no publish credential sitting in repo secrets to leak or exfiltrate.
- **No rotation.** Short-lived tokens expire on their own; you never rotate anything.
- **Provenance for free.** Publishing with `--provenance` attaches a signed, verifiable link back to the exact commit and workflow run, and npm shows a "Published via GitHub Actions" badge on the package page.

This requires `permissions: id-token: write` in the workflow (already set) and a one-time Trusted Publisher config on npm (below).

## Cutting a release

1. Bump the version (this also creates a commit and a git tag):

   ```bash
   npm version patch   # 2.0.0 -> 2.0.1   (bug fixes)
   npm version minor   # 2.0.0 -> 2.1.0   (new skills / features)
   npm version major   # 2.0.0 -> 3.0.0   (breaking changes)
   ```

2. Push the commit (and tags):

   ```bash
   git push --follow-tags
   ```

3. GitHub Actions publishes the new version to npm within a minute or two.
   Watch it under the repo's **Actions** tab; the run summary reports what it published.

> Keep the version in [`.claude-plugin/plugin.json`](../.claude-plugin/plugin.json) and [`.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json) in sync with `package.json` so the plugin marketplace and npm report the same version.

## One-time setup: configure the Trusted Publisher on npm

Do this once. After it, publishing needs no secret at all.

1. Sign in at [npmjs.com](https://www.npmjs.com/) as an account that can publish `@brijeshc2049/quiver`.
2. Go to the package page → **Settings** tab → **Trusted Publishers** (also called **Publishing access** / **OIDC**).
3. Add a **GitHub Actions** publisher with:
   - **Organization or user:** `brijeshc`
   - **Repository:** `quiver`
   - **Workflow filename:** `publish.yml`
   - **Environment:** leave blank (the workflow uses no GitHub Environment)
4. Save. GitHub Actions runs of `publish.yml` in `brijeshc/quiver` can now publish this package.

There is **no `NPM_TOKEN` secret to create** - if one exists from an earlier setup, you can delete it.

> The very first version of a brand-new package name sometimes must be published once manually (`npm publish --access public`) before a Trusted Publisher can be attached. Since `@brijeshc2049/quiver` already exists on npm, you can attach the Trusted Publisher right away.

## Manual publish (fallback)

If you ever need to publish without CI:

```bash
npm login
npm publish --access public
```

`--access public` matters for scoped packages (`@brijeshc2049/…`); without it, npm publishes them as private/restricted and unauthenticated installs 404.

## Troubleshooting

- **A brand-new version 404s right after publishing.** npm has a short CDN/replication lag for freshly published versions. Wait a minute and retry; `npm view @brijeshc2049/quiver version` confirms once it has propagated.
- **The Actions run succeeds but nothing publishes.** The version in `package.json` is already on npm - bump it. The run summary says exactly this.
- **The publish step fails with 401/403 or "unable to authenticate via OIDC".** The Trusted Publisher on npm doesn't match the run. Confirm the npm config lists org `brijeshc`, repo `quiver`, workflow `publish.yml`, and no environment, and that the workflow keeps `permissions: id-token: write`. Renaming the workflow file or repo breaks the match until you update the npm config.
