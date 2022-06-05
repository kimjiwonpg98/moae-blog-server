import { Module } from '@nestjs/common';
import { PostWriteService } from './post-write.service';
import { PostWriteController } from './post-write.controller';
import { PostWriteRepository } from '../config/repository/post-write.repository';
import { UserRepository } from 'src/config/repository/user-base.repository';

@Module({
  providers: [PostWriteService, PostWriteRepository, UserRepository],
  controllers: [PostWriteController],
})
export class PostWriteModule {}
