import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addAdminConfig } from 'src/config/interface/admin.interface';
import { createUserConfig } from 'src/config/interface/user.interface';
import { UserRepository } from 'src/config/repository/user-base.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(body: createUserConfig) {
    return await this.userRepository.createUser(body);
  }

  async findAllUsers() {
    return await this.userRepository.findAllUsers();
  }

  async addAdmin(body: addAdminConfig) {
    return await this.userRepository.addAdmin(body);
  }
}
