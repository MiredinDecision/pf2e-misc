// Copy files to dist
import fs from "fs";

let files_for_copy = ['module.json'];
let dirs_for_copy = ['assets'];

for (let f of files_for_copy) {
    fs.copyFileSync(f, `dist/${f}`);
}

for (let d of dirs_for_copy) {
    fs.cpSync(d, `dist/${d}`, { recursive: true });
}