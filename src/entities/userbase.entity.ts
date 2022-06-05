import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PostWrite } from './post-write.entity';

@Entity('USER_BASES')
@Unique(['email', 'nickname'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    comment: '순서',
  })
  no: number;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'nickname',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'timestamp',
    name: 'create_at',
    default: () => 'now()',
  })
  createAt: string;

  @OneToMany(() => PostWrite, (postWrite) => postWrite.writer)
  writer: PostWrite[];
}
