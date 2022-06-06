import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/config/dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Post('/user')
  async createUser(@Body() body: CreateUserDto) {
    const result = await this.userService.createUser(body);
    return result;
  }

  @Get('/user')
  async findAllUser() {
    const result = await this.userService.findAllUsers();
    return result;
  }
}
