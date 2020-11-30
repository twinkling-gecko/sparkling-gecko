import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'
import { IsEmail } from 'class-validator'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  @IsEmail()
  email: string

  @Column('text')
  encrypted_password: string

  @CreateDateColumn({ name: 'created_at', precision: 0 })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', precision: 0 })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', precision: 0 })
  deletedAt: Date
}
