import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserConfig } from 'src/config/interface/crate-user.interface';
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
}
