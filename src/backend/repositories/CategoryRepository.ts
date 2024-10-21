interface ICategoryRepository {
    create: () => void
    findById: () => void
    delete: () => void
    update: () => void
    getCategories: () => void
}

class CategoryRepository implements ICategoryRepository {
    create: () => void
    findById: () => void
    delete: () => void
    update: () => void
    getCategories: () => void
}

export default CategoryRepository