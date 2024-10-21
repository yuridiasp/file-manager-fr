import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Drawer {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    letter: string

    @Column("int")
    index: number

    @Column("int")
    folders_count: number

    @Column("bool")
    status: boolean
}

export default Drawer