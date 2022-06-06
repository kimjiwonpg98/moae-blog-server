import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/userbase.entity';
import { Repository } from 'typeorm';
import { addAdminConfig } from '../interface/admin.interface';
import { createUserConfig } from '../interface/user.interface';

@Injectable()
export class UserRepository extends Repository<User> {
  async findOneByUserEmail(email: string) {
    return User.findOneBy({ email: email });
  }

  async createUser(body: createUserConfig) {
    return User.createQueryBuilder().insert().into(User).values(body).execute();
  }

  async findAllUsers() {
    return User.find();
  }

  async addAdmin(body: addAdminConfig) {
    return User.createQueryBuilder()
      .update()
      .set({
        adminFlag: body.flag,
      })
      .where({ email: body.email })
      .execute();
  }
}
