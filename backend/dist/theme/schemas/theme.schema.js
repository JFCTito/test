"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ThemeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    cards: [
        {
            cardname: { type: String, required: true },
            cardimg: { type: String, required: true },
        },
    ],
});
//# sourceMappingURL=theme.schema.js.map