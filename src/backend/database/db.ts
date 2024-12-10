import Category from "../entities/Category"
import Document from "../entities/Document"
import Drawer from "../entities/Drawer"
import Folder from "../entities/Folder"
import User from "../entities/User"

interface iDatabase {
    documents: Document[]
    categories: Category[]
    drawers: Drawer[]
    folders: Folder[]
    users: User[]
}

const db: iDatabase = {
    documents: [
        {
            id: 1,
            category: "Contrato",
            description: "Contrato de Honorários",
            name: "Contrato Previdenciário",
            status: 0
        }
    ],
    categories: [
        {
            id: '1',
            description: "Contrato de Honorários",
            name: "Contrato"
        }
    ],
    drawers: [
        {
            id: 1,
            letter: "A",
            index: 1,
            folders_count: 1,
            status: false
        }
    ],
    folders: [
        {
            id: 1,
            index: 1,
            documents_count: 1,
            status: false
        }
    ],
    users: [
        {
            id: 1,
            email: 'yuri@gmail.com',
            name: 'Yuri Dias',
            password: '123456'
        }
    ]
}

export default db