import { compilePack } from "@foundryvtt/foundryvtt-cli";

// Compile a LevelDB compendium pack.
await compilePack("packs/our-items", "dist/packs/our-items");