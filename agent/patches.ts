import { base } from "./definitions.js";
import { Offsets } from "./offsets.js";

export function applyPatches() {
    // cursed code; maybe i should've used js
    (Memory as any).writeUtf8String(base.add(Offsets.EditControlsBrawler), "Silencer\0");
    //(Memory as any).writeUtf8String(base.add(Offsets.EditControlsMap), "Tutorial\0"); crashes
}