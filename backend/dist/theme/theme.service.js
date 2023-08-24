"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ThemeService = exports.ThemeService = class ThemeService {
    constructor(themeModel) {
        this.themeModel = themeModel;
    }
    async findAll() {
        const users = await this.themeModel.find();
        return users;
    }
    async findOne(id) {
        const user = await this.themeModel.findById(id);
        return user;
    }
    async create(createThemeDTO) {
        const theme = new this.themeModel(createThemeDTO);
        return await theme.save();
    }
    async delete(id) {
        const deletedTheme = await this.themeModel.findByIdAndDelete(id);
        return deletedTheme;
    }
    async update(id, createThemeDTO) {
        const updatedTheme = await this.themeModel.findByIdAndUpdate(id, createThemeDTO, { new: true });
        return updatedTheme;
    }
};
exports.ThemeService = ThemeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Theme')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ThemeService);
//# sourceMappingURL=theme.service.js.map