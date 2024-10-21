import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    name: string

    @Column("text")
    password: string

    @Column("text")
    email: string
}

export default User