import crypto from 'node:crypto'

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

    constructor(private database = db){}

    async create (name: string, description: string) {
        const category = new Category()

        category.id = crypto.randomUUID()
        category.name = name
        category.description = description

        this.database.categories.push(category)

        return category.id
    }

    async findById (id: string) {
        return this.database.categories.find(category => category.id === id)
    }

    async findByName (name: string) {
        return this.database.categories.find(category => category.name === name)
    }

    async delete (id: string) {
        const index = this.database.categories.findIndex(category => category.id === id)

        if (index === -1)
            return false
        
        this.database.categories.splice(index, 1)

        return true
    }

    async update (id: string, data: Partial<Category>) {
        const index = this.database.categories.findIndex(category => category.id === id)

        if(index === -1)
            return null

        Object.keys(data).forEach(<T extends keyof Category>(key: T) => {
            this.database.categories[index][key] = data[key]
        })

        return this.database.categories[index]
    }

    async getCategories () {
        return this.database.categories
    }
}

export default CategoryRepository