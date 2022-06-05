import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/userbase.entity';
import { Repository } from 'typeorm';
import { createUserConfig } from '../interface/crate-user.interface';

@Injectable()
export class UserRepository extends Repository<User> {
  async findOneByUserEmail(email: string) {
    return User.findOneBy({ email: email });
  }

  async createUser(body: createUserConfig) {
    return User.createQueryBuilder().insert().into(User).values(body).execute();
  }
}
