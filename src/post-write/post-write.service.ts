import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postWriteReqConfig } from 'src/config/interface/post-write.interface';
import { UserRepository } from 'src/config/repository/user-base.repository';
import { PostWriteRepository } from '../config/repository/post-write.repository';

@Injectable()
export class PostWriteService {
  constructor(
    @InjectRepository(PostWriteRepository)
    private readonly postWriteRepository: PostWriteRepository,

    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createPost(body: postWriteReqConfig) {
    const user = await this.userRepository.findOneByUserEmail(body.writer);
    return await this.postWriteRepository.createWrite(body, user.no);
  }
}
