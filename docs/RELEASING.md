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

## One-time setup: the NPM_TOKEN secret

The workflow authenticates to npm with a repository secret named `NPM_TOKEN`.

1. Create an npm **automation** access token (bypasses 2FA, intended for CI):
   npm website → your avatar → **Access Tokens** → **Generate New Token** → **Automation**.
   (Or `npm token create --read-only=false` and choose an automation/granular token that can publish `@brijeshc2049/quiver`.)
2. In GitHub: repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
   - Name: `NPM_TOKEN`
   - Value: the token from step 1.
3. Done. The next version bump pushed to `main` publishes automatically.

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
- **The publish step fails with 401/403.** The `NPM_TOKEN` secret is missing, expired, or lacks publish rights for the scope. Regenerate an automation token and update the secret.
