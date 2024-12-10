import Category from "../entities/Category"
import db from '../database/db'

interface ICategoryRepository {
    create: (name: string, description: string) => Promise<string>
    findById: (id: string) => Promise<Category>
    findByName: (name: string) => Promise<Category>
    delete: (id: string) => Promise<boolean>
    update: (id: string, data: Partial<Category>) => Promise<Category>
    getCategories: () => Promise<Category[]>
}

class CategoryRepository implements ICategoryRepository {

    async create (name: string, description: string) {
        const category = new Category()

        category.id = crypto.randomUUID()
        category.name = name
        category.description = description

        return category.id
    }

    async findById (id: string) {
        return db.categories.find(category => category.id === id)
    }

    async findByName (name: string) {
        return db.categories.find(category => category.name === name)
    }

    async delete (id: string) {
        const index = db.categories.findIndex(category => category.id === id)

        if (index === -1)
            return false
        
        db.categories.splice(index, 1)

        return true
    }

    async update (id: string, data: Partial<Category>) {
        const index = db.categories.findIndex(category => category.id === id)

        if(index === -1)
            return null

        Object.keys(data).forEach(<T extends keyof Category>(key: T) => {
            db.categories[index][key] = data[key]
        })

        return db.categories[index]
    }

    async getCategories () {
        return db.categories
    }
}

export default CategoryRepository