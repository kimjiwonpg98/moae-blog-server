import { Injectable } from '@nestjs/common';
import { postWriteReqConfig } from 'src/config/interface/post-write.interface';
import { PostWrite } from 'src/entities/post-write.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostWriteRepository extends Repository<PostWrite> {
  async createWrite(data: postWriteReqConfig, userNo: number) {
    try {
      return await PostWrite.createQueryBuilder()
        .insert()
        .into(PostWrite)
        .values([
          {
            title: data.title,
            context: data.context,
            writer: () => userNo.toString(),
          },
        ])
        .execute();
    } catch (error) {
      throw error;
    }
  }
}
