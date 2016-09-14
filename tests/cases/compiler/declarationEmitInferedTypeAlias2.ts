// @declaration: true
// @skipDefaultLibCheck: true

// @Filename: 0.ts
export type Data = string | boolean;
let obj: Data = true;

// @Filename: 1.ts
import * as zero from "./0"
let v = "str" || true;
export { v }