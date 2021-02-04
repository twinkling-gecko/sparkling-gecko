import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  JoinColumn
} from 'typeorm'

import { Item } from './'

@Entity('item_values')
export class ItemValue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  value: string

  @Column({ type: 'timestamp', precision: 0, name: 'observed_at' })
  observedAt: Date

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
  @JoinColumn({ name: 'item_id'})
  item: Item
}
