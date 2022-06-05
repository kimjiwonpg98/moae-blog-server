import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './userbase.entity';

@Entity('POST_BOARDS')
export class PostWrite extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    comment: '순서',
  })
  no: number;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '제목',
  })
  title: string;

  @ManyToOne(() => User, {
    nullable: false,
  })
  @JoinColumn({
    name: 'writer_no',
  })
  writer: User;

  @Column({
    type: 'text',
    name: 'context',
    comment: '내용',
  })
  context: string;

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
}
