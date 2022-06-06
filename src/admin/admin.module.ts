import { Module } from '@nestjs/common';
import { UserRepository } from 'src/config/repository/user-base.repository';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, UserRepository],
})
export class AdminModule {}
