import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserDTO: CreateUserDTO): Promise<User>;
}
