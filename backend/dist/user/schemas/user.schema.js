"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true },
    score: { type: Number, default: 0 },
});
//# sourceMappingURL=user.schema.js.map