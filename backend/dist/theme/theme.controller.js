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
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const theme_service_1 = require("./theme.service");
const theme_dto_1 = require("./dto/theme.dto");
let ThemeController = exports.ThemeController = class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
    }
    findAll() {
        return this.themeService.findAll();
    }
    findOne(id) {
        return this.themeService.findOne(id);
    }
    async create(createThemeDTO) {
        return await this.themeService.create(createThemeDTO);
    }
    delete(res, id) {
        const deletedProject = this.themeService.delete(id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Theme deleted successfully',
        });
    }
    async update(id, createThemeDTO) {
        const updatedTheme = await this.themeService.update(id, createThemeDTO);
        if (!updatedTheme)
            throw new common_1.NotFoundException('Project not found');
        return updatedTheme;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [theme_dto_1.CreateThemeDTO]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, theme_dto_1.CreateThemeDTO]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "update", null);
exports.ThemeController = ThemeController = __decorate([
    (0, common_1.Controller)('theme'),
    __metadata("design:paramtypes", [theme_service_1.ThemeService])
], ThemeController);
//# sourceMappingURL=theme.controller.js.map