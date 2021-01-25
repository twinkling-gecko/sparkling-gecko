import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'

import { User } from './User'

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column({ type: 'varchar', name: 'image_url' })
  imageUrl: string

  @Column({ type: 'varchar', name: 'graph_type' })
  graphType: string

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date

  @ManyToOne(() => User, user => user.items)
  user: User
}
