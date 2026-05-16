import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Role } from './roles.ts'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column()
  birthDate!: Date;

  @Column({unique: true })
  email!: string;

  @Column() 
  password!: string;

  @Column({default: Role.USER}) 
  role!: Role;
  
  @Column({default: true })
  isActive!: boolean;
}
