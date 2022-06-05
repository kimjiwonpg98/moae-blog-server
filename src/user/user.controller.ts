import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/config/dto/create-user.dto';
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
}
