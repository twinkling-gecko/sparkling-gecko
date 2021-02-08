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

import { User, ItemValue, GraphType } from './'

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column({ type: 'varchar', name: 'image_url', nullable: true })
  imageUrl: string | null

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

  @ManyToOne(() => GraphType, (graphType) => graphType.items)
  @JoinColumn({ name: 'graph_type_id' })
  graphType: GraphType

  @OneToMany(() => ItemValue, (itemValue) => itemValue.item)
  itemValues: ItemValue[]
}
