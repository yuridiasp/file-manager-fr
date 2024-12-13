import Category from "../entities/Category";
import ErrosMessage from "../helpers/ErrorMessages";
import HttpStatusCode from "../helpers/HTTPCode";
import CategoryService from "../services/CategoryService";

interface ICategoryController {
    create: (event: Electron.IpcMainEvent, name: string, description: string) => Promise<{ status: number, message: string; id?: string }>
    findById: (event: Electron.IpcMainEvent, id: string) => Promise<{ status: number, message: string, element?: Category}>
    delete: (event: Electron.IpcMainEvent, id: string) => Promise<{ status: number, message: string }>
    update: (event: Electron.IpcMainEvent, id: string, data: Partial<Category>) => Promise<{ status: number, message: string, element?: Category }>
    getCategories: (event: Electron.IpcMainEvent) => Promise<{status: number, elements: Category[]}>
}

class CategoryController implements ICategoryController {
    constructor (private categoryService = new CategoryService()){}

    async create (event: Electron.IpcMainEvent, name: string, description: string) {
        const errors = []

        if(!name) {
            errors.push(ErrosMessage.missingArgument.name)
        }

        if (!description) {
            errors.push(ErrosMessage.missingArgument.description)
        }

        if (errors.length) {
            return { status: HttpStatusCode.BadRequest, message: errors.join('\n') }
        }

        const result = await this.categoryService.create(name, description)

        return { status: HttpStatusCode.Created, message: 'Created', id: result }
    }

    async findById (event: Electron.IpcMainEvent, id: string) {
        const errors = []

        if(!id) {
            errors.push(ErrosMessage.missingArgument.id)
        }

        if (errors.length) {
            return { status: HttpStatusCode.BadRequest, message: errors.join('\n') }
        }

        const result = await this.categoryService.findById(id)

        return { status: HttpStatusCode.OK, message: 'Found', element: result }
    }

    async delete (event: Electron.IpcMainEvent, id: string) {
        const errors = []

        if(!id) {
            errors.push(ErrosMessage.missingArgument.id)
        }

        if (errors.length) {
            return { status: HttpStatusCode.BadRequest, message: errors.join('\n') }
        }

        const result = await this.categoryService.delete(id)

        if (!result) {
            return { status: HttpStatusCode.BadRequest, message: 'Not found' }
        }

        return { status: HttpStatusCode.OK, message: "Success" }
    }

    async update (event: Electron.IpcMainEvent, id: string, data: Partial<Category>) {
        const errors = []

        if(!id) {
            errors.push(ErrosMessage.missingArgument.id)
        }

        if(!Object.keys(data).length) {
            errors.push(ErrosMessage.missingArgument.data)
        }

        if (errors.length) {
            return { status: HttpStatusCode.BadRequest, message: errors.join('\n') }
        }

        const result = await this.categoryService.update(id, data)

        if (!result) {
            return { status: HttpStatusCode.BadRequest, message: 'Not found' }
        }

        return { status: HttpStatusCode.OK, message: 'Success' ,element: result}
    }

    async getCategories (event: Electron.IpcMainEvent) {
        const categories = await this.categoryService.getCategories()

        if (!categories.length) {
            return { status: HttpStatusCode.NoContent, elements: categories }
        }

        return { status: HttpStatusCode.OK, elements: categories }
    }
}

export default CategoryController