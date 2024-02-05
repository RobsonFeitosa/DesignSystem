## Commit
### How to commit for production2

- Create changeset mode
```bash
  npm run changeset
```
- Create version packages
```bash
  npm run version-packages
```
- And last commit changes for repo 
```bash
  git add . && git commit -m "..." && git push
```