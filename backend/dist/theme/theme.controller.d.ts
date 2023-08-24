import { ThemeService } from './theme.service';
import { CreateThemeDTO } from './dto/theme.dto';
export declare class ThemeController {
    private themeService;
    constructor(themeService: ThemeService);
    findAll(): Promise<import("./interfaces/theme.interface").Theme[]>;
    findOne(id: string): Promise<import("./interfaces/theme.interface").Theme>;
    create(createThemeDTO: CreateThemeDTO): Promise<import("./interfaces/theme.interface").Theme>;
    delete(res: any, id: string): any;
    update(id: string, createThemeDTO: CreateThemeDTO): Promise<import("./interfaces/theme.interface").Theme>;
}
