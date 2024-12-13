import Category from "../../../src/backend/entities/Category"
import CategoryController from "../../../src/backend/controllers/CategoryController"
import { iDatabase } from "../../../src/backend/database/db"
import HttpStatusCode from "../../../src/backend/helpers/HTTPCode"

const mockCategoryServiceCreate = jest.fn()
const mockCategoryServiceFindById = jest.fn()
const mockCategoryServiceDelete = jest.fn()
const mockCategoryServiceUpdate = jest.fn()
const mockCategoryServiceGetCategories = jest.fn()

jest.mock("../../../src/backend/services/CategoryService", () => {
    return jest.fn().mockImplementation(() => ({
        create: mockCategoryServiceCreate,
        findById: mockCategoryServiceFindById,
        delete: mockCategoryServiceDelete,
        update: mockCategoryServiceUpdate,
        getCategories: mockCategoryServiceGetCategories,
    }))
})

const event = {} as Electron.IpcMainEvent
let dbMock: iDatabase
let categoryController: CategoryController

describe('CategoryController', () => {

    beforeEach(() => {
        categoryController = new CategoryController()
        dbMock = {
            categories: [
                {
                    id: '1',
                    description: "Contrato de Honorários",
                    name: "Contrato"
                }
            ]
        } as iDatabase

        jest.clearAllMocks()
    })

    it('Create Method', async () => {
        const { id, name, description } = dbMock.categories[0]
        const expectResult = { status: HttpStatusCode.Created, message: 'Created', id }

        mockCategoryServiceCreate.mockReturnValueOnce(id)
        
        const result = await categoryController.create(event, name, description)

        expect(mockCategoryServiceCreate).toHaveBeenCalledWith(name, description)
        expect(result).toEqual(expectResult)
    })

    it('FindById Method',async () => {
        const category = dbMock.categories[0]
        const expectResult = { status: HttpStatusCode.OK, message: 'Found', element: category }

        mockCategoryServiceFindById.mockReturnValueOnce(category)

        const result = await categoryController.findById(event, category.id)

        expect(mockCategoryServiceFindById).toHaveBeenCalledWith(category.id)
        expect(result).toEqual(expectResult)
    })

    it('Delete Method', async () => {
        const category = dbMock.categories[0]
        const expectResult = { status: HttpStatusCode.OK, message: "Success" }

        mockCategoryServiceDelete.mockReturnValueOnce(true)

        const result = await categoryController.delete(event, category.id)

        expect(mockCategoryServiceDelete).toHaveBeenCalledWith(category.id)
        expect(result).toEqual(expectResult)
    })

    it('Update Method', async () => {
        const { id } = dbMock.categories[0]
        const partialCategory: Partial<Category> = {
            name: "Procuração",
            description: "Procuração Particular Judicial"
        }
        const updatedCategory: Category = { id, ...partialCategory}
        const expectResult = { status: HttpStatusCode.OK, message: 'Success' ,element: updatedCategory}

        mockCategoryServiceUpdate.mockReturnValueOnce(updatedCategory)

        const result = await categoryController.update(event, id, partialCategory)

        expect(mockCategoryServiceUpdate).toHaveBeenCalledWith(id, partialCategory)
        expect(result).toEqual(expectResult)
    })

    it('GetCategories Method', async () => {
        const expectResult = { status: HttpStatusCode.OK, elements: dbMock.categories}

        mockCategoryServiceGetCategories.mockReturnValueOnce(dbMock.categories)

        const result = await categoryController.getCategories(event)

        expect(result).toEqual(expectResult)
    })
})