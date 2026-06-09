/**
 * PF2e Flatten — entry point.
 *
 * Applies the "Proficiency Without Level" variant rule to PF2e actors by adding
 * a custom modifier equal to (negative) their level. Supports automatic
 * flattening of compendium-dragged actors, half-level proficiency, and bulk
 * flatten/unflatten from the Actors sidebar.
 */
import { MODULE_ID, Settings } from "./constants.js";
import { addContextMenuOptions, renderDirectoryButtons } from "./directory.js";
import { flattenActor, hasModifier, isUpdatable, refreshActor } from "./flatten.js";
import { getSetting, registerSettings } from "./settings.js";

Hooks.once("init", () => {
	registerSettings();
	console.log(`${MODULE_ID} | Initialized`);
});

// Sidebar UI: bulk buttons + per-actor context menu entries.
Hooks.on("renderActorDirectory", renderDirectoryButtons);
Hooks.on("getActorDirectoryEntryContext", addContextMenuOptions);

// Auto-flatten freshly created actors (e.g. dragged from a compendium).
Hooks.on("createActor", async (actor, _options, userId) => {
	if (game.user.id !== userId) return;
	if (isUpdatable(actor) && getSetting(Settings.AUTO_FLATTEN)) {
		await flattenActor(actor);
	}
});

// Keep an already-flattened actor in sync when its level changes.
Hooks.on("updateActor", async (actor, changed, _options, userId) => {
	if (game.user.id !== userId) return;
	if (changed?.system?.details?.level?.value === undefined) return;
	if (!isUpdatable(actor) || !hasModifier(actor)) return;
	if (await refreshActor(actor)) {
		ui.notifications.info(
			game.i18n.format(`${MODULE_ID}.notifications.reapplied`, { name: actor.name }),
		);
	}
});
