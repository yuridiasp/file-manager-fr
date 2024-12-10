import Category from "../entities/Category"
import CategoryRepository from "../repositories/CategoryRepository"

interface ICategoryService {
    create: (name: string, description: string) => Promise<string>
    findById: (id: string) => Promise<Category>
    delete: (id: string) => Promise<boolean>
    update: (id: string, data: Partial<Category>) => Promise<Category>
    getCategories: () => Promise<Category[]>
}

class CategoryService implements ICategoryService {
    constructor (private categoryRepository = new CategoryRepository()){}

    async create (name: string, description: string) {
        const categoryAlreadyExists = await this.categoryRepository.findByName(name)

        if (categoryAlreadyExists) {
            return null
        }

        const id = await this.categoryRepository.create(name, description)

        return id
    }

    async findById (id: string) {
        return this.categoryRepository.findById(id)
    }

    async delete (id: string) {
        return await this.categoryRepository.delete(id)
    }

    async update (id: string, data: Partial<Category>) {
        return await this.categoryRepository.update(id, data)
    }

    async getCategories () {
        return await this.categoryRepository.getCategories()
    }
}

export default CategoryService