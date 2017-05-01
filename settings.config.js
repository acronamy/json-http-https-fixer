"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const map = {
    in: path.join(__dirname, './in'),
    out: path.join(__dirname, './out')
};
exports.map = map;
const behavior = {
    input: "file",
    output: "file"
};
exports.behavior = behavior;
