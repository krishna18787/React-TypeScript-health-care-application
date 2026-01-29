# Git Setup and Usage Guide

## Repository Information
- **Project**: Jivo Care - React TypeScript Health Care Application
- **Repository**: Local Git repository initialized
- **Branch**: main
- **Initial Commit**: 1931877

## Git Configuration
```bash
# User Configuration
Name: Krishna
Email: krishna.verma@kellton.com
```

## Repository Status
✅ Git initialized successfully
✅ Initial commit created with 44 files
✅ 22,700+ lines of code committed
✅ Clean working directory

## Common Git Commands

### 📝 Daily Workflow

#### Check Status
```bash
git status
```

#### Stage Changes
```bash
# Stage all changes
git add .

# Stage specific file
git add src/components/MyComponent.tsx

# Stage specific folder
git add src/components/
```

#### Commit Changes
```bash
# Commit with message
git commit -m "Add new feature"

# Commit with detailed message
git commit -m "Fix header layout issue" -m "- Fixed logo alignment
- Updated navigation spacing
- Improved mobile responsiveness"
```

#### View History
```bash
# View commit history
git log

# View compact history
git log --oneline

# View last 5 commits
git log -5

# View with file changes
git log --stat
```

### 🌿 Branch Management

#### Create and Switch Branches
```bash
# Create new branch
git branch feature/new-component

# Switch to branch
git checkout feature/new-component

# Create and switch in one command
git checkout -b feature/new-component
```

#### List Branches
```bash
# List local branches
git branch

# List all branches (including remote)
git branch -a
```

#### Merge Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature/new-component
```

#### Delete Branch
```bash
# Delete local branch
git branch -d feature/new-component

# Force delete
git branch -D feature/new-component
```

### 🔄 Remote Repository (When Ready)

#### Add Remote Repository
```bash
# GitHub
git remote add origin https://github.com/yourusername/my-react-app-1.git

# Verify remote
git remote -v
```

#### Push Changes
```bash
# First push (set upstream)
git push -u origin main

# Subsequent pushes
git push

# Push specific branch
git push origin feature/new-component
```

#### Pull Changes
```bash
# Pull from remote
git pull

# Pull specific branch
git pull origin main
```

### ⏮️ Undo Changes

#### Unstage Files
```bash
# Unstage all files
git reset

# Unstage specific file
git reset src/components/MyComponent.tsx
```

#### Discard Changes
```bash
# Discard changes in specific file
git checkout -- src/components/MyComponent.tsx

# Discard all changes (careful!)
git checkout -- .
```

#### Undo Last Commit
```bash
# Undo commit but keep changes
git reset --soft HEAD~1

# Undo commit and unstage changes
git reset HEAD~1

# Undo commit and discard changes (careful!)
git reset --hard HEAD~1
```

### 📊 View Changes

#### See Differences
```bash
# View unstaged changes
git diff

# View staged changes
git diff --cached

# View changes in specific file
git diff src/components/MyComponent.tsx

# View changes between commits
git diff HEAD~1 HEAD
```

### 🏷️ Tags

#### Create Tags
```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"

# List tags
git tag
```

#### Push Tags
```bash
# Push specific tag
git push origin v1.0.0

# Push all tags
git push --tags
```

## .gitignore File
The project includes a comprehensive `.gitignore` file that excludes:
- `node_modules/` - Dependencies
- `build/` and `dist/` - Build outputs
- `.env` files - Environment variables
- `.DS_Store` - Mac system files
- IDE files (`.vscode/`, `.idea/`)
- Log files
- Temporary files

## Recommended Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/add-booking-form

# Make changes...

# Stage and commit
git add .
git commit -m "Add booking form component"

# Switch back to main
git checkout main

# Merge feature
git merge feature/add-booking-form

# Delete feature branch
git branch -d feature/add-booking-form
```

### 2. Bug Fixes
```bash
# Create bugfix branch
git checkout -b bugfix/fix-header-alignment

# Fix the issue...

# Stage and commit
git add src/components/Header.css
git commit -m "Fix header logo alignment on mobile"

# Merge back
git checkout main
git merge bugfix/fix-header-alignment
```

### 3. Regular Commits
```bash
# Good commit practice
git add .
git commit -m "Update footer social media links

- Add Instagram link
- Update Twitter icon
- Fix LinkedIn URL"
```

## Git Best Practices

### ✅ Do's
- Commit frequently with meaningful messages
- Use branches for new features
- Keep commits focused and atomic
- Write descriptive commit messages
- Pull before pushing when working with remote
- Review changes before committing (`git diff`)

### ❌ Don'ts
- Don't commit `node_modules/`
- Don't commit sensitive data (API keys, passwords)
- Don't use `git add .` blindly - review changes first
- Don't commit large binary files unnecessarily
- Don't force push to shared branches
- Don't commit commented-out code

## Commit Message Convention

### Format
```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat: add booking form component"
git commit -m "fix: correct header alignment on mobile"
git commit -m "refactor: standardize section title typography"
git commit -m "docs: update README with setup instructions"
git commit -m "style: format CSS files with prettier"
```

## Next Steps

### 1. Create GitHub Repository (Optional)
1. Go to https://github.com/new
2. Create new repository
3. Add remote and push:
   ```bash
   git remote add origin https://github.com/yourusername/my-react-app-1.git
   git push -u origin main
   ```

### 2. Set Up Branch Protection (For Team)
- Require pull request reviews
- Require status checks to pass
- Prevent force pushes

### 3. Add README Badges (Optional)
- Build status
- Code coverage
- License
- Version

## Troubleshooting

### Problem: Merge Conflicts
```bash
# View conflicted files
git status

# Edit files to resolve conflicts
# Remove conflict markers (<<<<<<<, =======, >>>>>>>)

# Stage resolved files
git add resolved-file.tsx

# Complete merge
git commit
```

### Problem: Committed Wrong Files
```bash
# Remove file from last commit
git rm --cached unwanted-file.txt
git commit --amend
```

### Problem: Need to Change Last Commit Message
```bash
git commit --amend -m "New commit message"
```

## Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Last Updated**: January 29, 2026
**Repository Initialized**: January 29, 2026
**Initial Commit**: 1931877
