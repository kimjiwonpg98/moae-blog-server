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
@Unique(['email'])
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
    comment: 'ex) 1기 김지원',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'email',
    comment: '이메일',
  })
  email: string;

  @Column({
    type: 'int',
    name: 'year',
    comment: '기수',
  })
  year: number;

  @Column({
    type: 'boolean',
    name: 'admin_flag',
    comment: '관리자',
    default: false,
  })
  adminFlag: boolean;

  @Column({
    type: 'timestamp',
    name: 'create_at',
    default: () => 'now()',
  })
  createAt: string;

  @Column({
    type: 'timestamp',
    name: 'update_at',
    onUpdate: 'now()',
    default: () => 'now()',
  })
  updateAt: string;

  @OneToMany(() => PostWrite, (postWrite) => postWrite.writer)
  writer: PostWrite[];
}
