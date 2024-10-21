import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Document {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    name: string

    @Column("text")
    description: string

    @Column("text")
    category: string

    @Column("int")
    status: number
}

export default Document