import { Model } from 'mongoose';
import { Theme } from './interfaces/theme.interface';
import { CreateThemeDTO } from './dto/theme.dto';
export declare class ThemeService {
    private readonly themeModel;
    constructor(themeModel: Model<Theme>);
    findAll(): Promise<Theme[]>;
    findOne(id: string): Promise<Theme>;
    create(createThemeDTO: CreateThemeDTO): Promise<Theme>;
    delete(id: string): Promise<Theme>;
    update(id: string, createThemeDTO: CreateThemeDTO): Promise<Theme>;
}
