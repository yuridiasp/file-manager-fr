interface ICategoryController {
    create: () => void
    findById: () => void
    delete: () => void
    update: () => void
    getCategories: () => void
}

class CategoryController implements ICategoryController {
    create: () => void
    findById: () => void
    delete: () => void
    update: () => void
    getCategories: () => void
}

export default CategoryController