import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./interfaces/user.interface").User[]>;
    findOne(id: string): Promise<import("./interfaces/user.interface").User>;
    create(createUserDTO: CreateUserDTO): Promise<import("./interfaces/user.interface").User>;
}
