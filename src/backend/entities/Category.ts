import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    name: string

    @Column("text")
    description: string
}

export default Category