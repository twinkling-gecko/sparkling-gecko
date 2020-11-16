import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Length } from 'class-validator'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  @Length(5, 10)
  name: string
}
