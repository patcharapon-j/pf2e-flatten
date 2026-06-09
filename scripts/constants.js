/**
 * Shared constants for the PF2e Flatten module.
 */

/** Module id, matching the `id` field in module.json. */
export const MODULE_ID = "pf2e-flatten";

/** Label used for the PF2e custom modifier that applies the flattening. */
export const MODIFIER_LABEL = "Flattened Level Proficiency";

/** Slug PF2e derives from {@link MODIFIER_LABEL}; used as a fallback on removal. */
export const MODIFIER_SLUG = "flattened-level-proficiency";

/** Statistic selector that applies the modifier to every roll ("all"). */
export const MODIFIER_SELECTOR = "all";

/** Setting keys registered by the module. */
export const Settings = {
	AUTO_FLATTEN: "autoflatten",
	FLATTEN_PCS: "flattenPcs",
	MULTIPLIER: "multiplier",
	ROUNDING_MODE: "roundingMode",
};

/** Proficiency multipliers offered by the "reduced proficiency" setting. */
export const Multiplier = {
	HALF: 0.5,
	NONE: 1,
};

/** Rounding modes for the half-level calculation. */
export const RoundingMode = {
	CEIL: 0,
	FLOOR: 1,
};

/** Maps a {@link RoundingMode} to its rounding function. */
export const ROUNDING_FUNCTIONS = {
	[RoundingMode.CEIL]: Math.ceil,
	[RoundingMode.FLOOR]: Math.floor,
};
