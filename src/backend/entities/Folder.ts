import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Folder {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int")
    index: number

    @Column("int")
    documents_count: number

    @Column("bool")
    status: boolean
}

export default Folder