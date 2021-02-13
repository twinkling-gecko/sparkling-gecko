import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm'
import { IsEmail } from 'class-validator'
import { Item } from './'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  @IsEmail()
  email: string

  @Column({ type: 'text', name: 'encrypted_password' })
  encryptedPassword: string

  @Column('text')
  token: string

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

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    precision: 0,
    nullable: true,
    default: null,
  })
  deletedAt: Date

  @OneToMany(() => Item, (item) => item.user)
  items: Item[]
}
