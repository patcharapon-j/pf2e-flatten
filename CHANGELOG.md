# Changelog

## 1.0.1

- **Fixed the right-click context menu not appearing on Foundry v14.** Foundry v13
  renamed the directory context hook to the `get<Document>ContextOptions` pattern and
  the old `getActorDirectoryEntryContext` hook no longer fires on v14, so the
  Flatten / Unflatten entries never got added. The module now listens for
  `getActorContextOptions`.

## 1.0.0

- **Flattening no longer colours NPC sheets red.** The NPC sheet highlights a statistic
  when its total differs from the value written on the actor; flattening lowers nearly
  everything, which previously turned the whole sheet red. The sheet's comparison
  baseline is now shifted down by the flattening amount, so colouring reflects only
  changes *beyond* flattening — a negative condition still turns a number red and a buff
  still turns it green.

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
