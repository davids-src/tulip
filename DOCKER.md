# Docker Setup & GitHub Actions Workflow

This document explains the Docker configuration and GitHub Actions workflow for building and pushing images to GitHub Container Registry (GHCR).

## Files Created

### Docker Configuration

1. **Dockerfile** - Multi-stage Docker build optimized for Next.js with static export
   - Builder stage: Compiles the Next.js app
   - Runner stage: Serves static files using `serve`
   - Security: Runs as non-root user (nextjs)
   - Small image size using Alpine Linux

2. **.dockerignore** - Excludes unnecessary files from the Docker build context

3. **docker-compose.yml** - Local development environment with health checks

### GitHub Actions Workflow

**`.github/workflows/build-push-docker.yml`** - Automated CI/CD pipeline that:

- Triggers on:
  - Pushes to `main` and `docker-ghcr-workflow` branches
  - All git tags matching `v*` pattern
  - Pull requests to `main` (build only, no push)

- **Build & Push Job**:
  - Sets up Docker Buildx for multi-platform builds
  - Logs in to GHCR using `GITHUB_TOKEN`
  - Generates semantic versioning tags
  - Caches layers using GitHub Actions cache
  - Only pushes on main branch or tag events

- **Security Scanning Job**:
  - Runs Trivy vulnerability scanner
  - Uploads results to GitHub Security tab
  - Only runs after successful build (non-PR only)

- **Notification Job**:
  - Provides build status feedback

## How It Works

### Image Tags

The workflow automatically generates the following tags:

- `ghcr.io/davids-src/tulip:main` - Latest from main branch
- `ghcr.io/davids-src/tulip:latest` - Only from main branch
- `ghcr.io/davids-src/tulip:sha-{commit}` - Branch + commit SHA
- `ghcr.io/davids-src/tulip:v1.2.3` - Semver tags for releases

### Local Development

#### Build the Docker image locally:

```bash
docker build -t tulip:latest .
```

#### Run with docker-compose:

```bash
docker-compose up
```

The app will be available at `http://localhost:3000`

#### Run directly with Docker:

```bash
docker run -p 3000:3000 tulip:latest
```

## Prerequisites for GitHub Actions

### Required Permissions

The workflow uses `GITHUB_TOKEN` which automatically has permission to push to GHCR.

### Organization Settings

For personal repositories or organization use:
1. Go to your repository settings
2. Ensure "Container registry" is enabled
3. No additional secrets needed - GITHUB_TOKEN is automatically provided

## Building and Testing

### Local Testing

```bash
# Build the image
docker build -t tulip:test .

# Run the image
docker run -p 3000:3000 tulip:test

# Test the endpoint
curl http://localhost:3000
```

### CI/CD Testing

Push to the `docker-ghcr-workflow` branch to test the workflow:

```bash
git push origin docker-ghcr-workflow
```

Check the "Actions" tab in GitHub to see the workflow run.

## Pushing to Production

### Method 1: Merge to Main

```bash
# Create a PR and merge to main
git checkout -b feature/something
# ... make changes ...
git push origin feature/something
# Create PR and merge
```

### Method 2: Create a Release Tag

```bash
# Create a semantic version tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Configuration

### Next.js Build Output

The project uses `output: 'export'` in `next.config.js`, which creates a static site. To switch to Node.js server mode:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'standalone',  // Instead of 'export'
  // ... rest of config
};
```

2. Use the alternative Dockerfile for standalone builds (provided separately if needed)

### Environment Variables

If you need to pass environment variables at runtime:

```bash
docker run -e VARIABLE_NAME=value -p 3000:3000 tulip:latest
```

For docker-compose, add to `.env` file or modify `docker-compose.yml`:

```yaml
environment:
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

## Troubleshooting

### Build Fails in GitHub Actions

1. Check if `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` exists
2. Ensure all dependencies are specified in `package.json`
3. Check the workflow logs in the Actions tab

### Image Too Large

- The Alpine base (`node:18-alpine`) keeps images small
- Remove unused dependencies from `package.json`
- Consider adding `.dockerignore` entries

### Permission Issues

- Ensure the GITHUB_TOKEN has `write:packages` permission
- Check repository settings for Container registry

### Local Port Conflicts

If port 3000 is already in use:

```bash
docker run -p 8000:3000 tulip:latest
```

Then access at `http://localhost:8000`

## Next Steps

1. Commit these changes to the `docker-ghcr-workflow` branch
2. Test locally with `docker-compose up`
3. Create a pull request to review
4. Merge to main to trigger the first automated build
5. Monitor the workflow in the GitHub Actions tab
