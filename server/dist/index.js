"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.port = 3001;
exports.app.get('/api', (req, res) => {
    res.send({ data: "Hello World" });
});
exports.app.listen(exports.port, () => {
    console.log(`listening on port ${exports.port}`);
});
