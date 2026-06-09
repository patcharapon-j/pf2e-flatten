# Changelog

## 1.0.0

- **Foundry VTT v14 support.** Verified against Foundry v14; minimum supported version is v13.
- **Full rework and refactor.** The single `bundle.js` was split into focused ES modules under `scripts/` (`constants`, `settings`, `flatten`, `directory`, and the `pf2e-flatten` entry point).
- Context-menu entries now use the supported `getActorDirectoryEntryContext` hook instead of monkeypatching `ActorDirectory.prototype._getEntryContextOptions`.
- Removal now reads each modifier's own PF2e `slug` rather than re-deriving it, dropping the bespoke slugify code.
- Fixed the half-level calculation so the value is correctly clamped to be non-positive.
- Auto-flatten and level-sync hooks now only run on the acting client and react specifically to level changes, avoiding redundant work across connected clients.
- Sidebar buttons, context menu labels, and notifications are now fully localized.
- New manual GitHub Actions release workflow publishes a GitHub Release so the module can be installed and updated via a manifest link.

---

Earlier history (pre-fork) lives in the original
[League-of-Foundry-Developers/pf2e-flatten](https://github.com/League-of-Foundry-Developers/pf2e-flatten)
repository.
