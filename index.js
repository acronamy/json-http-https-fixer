"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const settings_config_1 = require("./settings.config");
function readdir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, data) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(data.map(file => {
                    return Object.assign(path.parse(file), {
                        dir: dir,
                        fullpath: path.join(dir, file),
                        data: () => {
                            return safeJson(path.join(dir, file));
                        }
                    });
                }));
            }
        });
    });
}
function safeJson(data) {
    return new Promise((resolve, reject) => {
        try {
            resolve({
                data: JSON.parse(data),
                valid: true
            });
        }
        catch (err) {
            resolve({
                data: data,
                valid: false
            });
        }
    });
}
function deepLoop(target) {
}
console.log(`
Mode:`);
console.log(`input: ${settings_config_1.behavior.input}`);
console.log(`output: ${settings_config_1.behavior.output}
`);
if (settings_config_1.behavior.input === "file") {
}
else if (settings_config_1.behavior.output === "stream") {
    //TODO
    //const data = fs.readdirSync( map.in );
}
