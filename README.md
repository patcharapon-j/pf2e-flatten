# PF2e Flatten Proficiency

A Foundry VTT module for the **Pathfinder Second Edition** system that applies the
[Proficiency Without Level](https://2e.aonprd.com/Rules.aspx?ID=1372) variant rule
to your actors. It adds a custom modifier equal to the negative of an actor's level
to all of their checks and DCs — saves, skills, attacks, spell DCs, and so on — so
you can run the lower-power variant without re-keying any statistics.

> Compatible with **Foundry VTT v13–v14** and the Pathfinder 2e system.

## Features

- **Flatten / Unflatten any actor** from the actor directory right-click menu.
- **Bulk Flatten All / Unflatten All** buttons in the Actors sidebar header (GM only).
- **Automatic flattening** of actors dragged in from compendiums (toggleable). Actors
  you build from scratch are left alone, and actors stored already-flattened in a
  compendium are not double-flattened on import.
- **Reduced proficiency** support: use the full level or **half level** (rounded up or
  down) for the variant.
- **Level sync**: a flattened actor is automatically re-flattened when its level changes,
  so the modifier always matches the current level.
- Recall Knowledge DCs are handled by the PF2e system's own Proficiency Without Level
  variant rule and are intentionally left untouched here.

## Installation

In Foundry VTT, open **Add-on Modules → Install Module** and paste this manifest URL:

```
https://github.com/patcharapon-j/pf2e-flatten/releases/latest/download/module.json
```

This link always points at the latest release, so Foundry will offer updates as new
versions are published. You can also download a release archive from the
[Releases page](https://github.com/patcharapon-j/pf2e-flatten/releases).

## Usage

1. Enable the module in your world (**Game Settings → Manage Modules**).
2. Right-click an actor in the Actors sidebar and choose **PF2e Flatten** or
   **PF2e Unflatten**, or use the **Flatten All / Unflatten All** buttons in the
   sidebar header.
3. Configure behaviour under **Game Settings → Configure Settings → PF2e Flatten**:
   - **Automatically flatten new actors** — flatten eligible actors as they enter the world.
   - **Enable flattening for PCs** — also apply the actions to player characters.
   - **Reduced proficiency mode** — full level or half level.
   - **Rounding mode** — round the half-level value up or down.

> Changing the multiplier or rounding settings does not retroactively update already
> flattened actors. Use **Unflatten All** followed by **Flatten All** to re-apply.

## Releasing (maintainers)

Releases are produced by the manually-triggered **Release** GitHub Action
(`.github/workflows/release.yml`):

1. Go to the repository's **Actions** tab and select **Release**.
2. Click **Run workflow**, enter the version (for example `1.0.1`), and run it.

The workflow stamps `module.json` with the version and release URLs, builds
`module.zip`, tags the commit, and publishes a GitHub Release with `module.json` and
`module.zip` attached — which is what the manifest link above resolves to.

## Project layout

```
module.json                 Module manifest
scripts/
  pf2e-flatten.js           Entry point; registers hooks
  constants.js              Shared constants and enums
  settings.js               World setting registration
  flatten.js                Core flatten / unflatten logic
  directory.js              Sidebar buttons and context menu
lang/en.json                Localization strings
.github/workflows/release.yml  Manual release workflow
```

## Credits & License

This module is a fork and rework of
[League-of-Foundry-Developers/pf2e-flatten](https://github.com/League-of-Foundry-Developers/pf2e-flatten),
which itself overhauled the NPC flattening function from
[DJphoenix719's PF2E Toolbox](https://github.com/Djphoenix719/FVTT-PF2EToolbox).
Thank you to the original authors and contributors.

Released under the [Apache 2.0 License](LICENSE).
