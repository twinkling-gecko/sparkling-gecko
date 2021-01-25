import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm'

import { Item } from './'

@Entity('itemValues')
export class ItemValue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  value: string

  @Column({ type: 'timestamp', precision: 0, name: 'observated_time' })
  observatedTime: Date

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

  @ManyToOne(() => Item, (item) => item.itemValues)
  item: Item
}
