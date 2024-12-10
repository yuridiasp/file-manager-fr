import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Category {
    
    @PrimaryGeneratedColumn()
    id?: string

    @Column("text")
    name?: string

    @Column("text")
    description?: string
}

export default Category