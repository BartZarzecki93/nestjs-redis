
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'first_name' })
    name!: string;

    @Column({ name: 'last_name' })
    surname!: string;

    @Column({ default: 0 })
    address!: string;
}
