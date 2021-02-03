import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'

import { User, ItemValue } from './'

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column({ type: 'varchar', name: 'image_url' })
  imageUrl: string

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

  @ManyToOne(() => User, (user) => user.items)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => ItemValue, (itemValue) => itemValue.item)
  itemValues: ItemValue[]
}
