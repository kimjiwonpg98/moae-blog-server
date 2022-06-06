import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addAdminConfig } from 'src/config/interface/admin.interface';
import { UserRepository } from 'src/config/repository/user-base.repository';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async addAdmin(body: addAdminConfig) {
    return await this.userRepository.addAdmin(body);
  }
}
