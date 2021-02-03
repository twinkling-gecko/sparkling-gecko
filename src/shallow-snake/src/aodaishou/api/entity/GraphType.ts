import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Item } from './'

@Entity('graph_types')
export class GraphType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

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

  @OneToMany(() => Item, item => item.graphType)
  items: Item[]
}
