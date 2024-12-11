import { iDatabase } from "../../../src/backend/database/db"
import CategoryService from "../../../src/backend/services/CategoryService"

const mockCategoryRepositoryCreate = jest.fn()
const mockCategoryRepositoryFindById = jest.fn()
const mockCategoryRepositoryDelete = jest.fn()
const mockCategoryRepositoryUpdate = jest.fn()
const mockCategoryRepositoryGetCategories = jest.fn()
const mockCategoryRepositoryFindByName = jest.fn()

jest.mock("../../../src/backend/repositories/CategoryRepository", () => {
    return jest.fn().mockImplementation(() => ({
        create: mockCategoryRepositoryCreate,
        findById: mockCategoryRepositoryFindById,
        delete: mockCategoryRepositoryDelete,
        update: mockCategoryRepositoryUpdate,
        getCategories: mockCategoryRepositoryGetCategories,
        findByName: mockCategoryRepositoryFindByName
    }))
})

let dbMock: iDatabase
const categoryService = new CategoryService()

describe('CategoryService', () => {

    beforeEach(() => {
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
        const id = '1'
        const name = 'Procuração'
        const description = 'Procuração Particular Judicial'

        mockCategoryRepositoryCreate.mockReturnValueOnce(id)
        mockCategoryRepositoryFindByName.mockResolvedValueOnce(null)

        const result = await categoryService.create(name, description)
        
        expect(mockCategoryRepositoryCreate).toHaveBeenCalledWith(name, description)
        expect(result).toBe(id)
    })

    it('FindById Method', async () => {
        const category = dbMock.categories[0]

        mockCategoryRepositoryFindById.mockReturnValueOnce(category)

        const result = await categoryService.findById(category.id)
        
        expect(mockCategoryRepositoryFindById).toHaveBeenCalledWith(category.id)
        expect(result).toBe(category)
    })

    it('Delete Method', async () => {
        const category = dbMock.categories[0]

        mockCategoryRepositoryDelete.mockReturnValueOnce(true)

        const result = await categoryService.delete(category.id)
        
        expect(mockCategoryRepositoryDelete).toHaveBeenCalledWith(category.id)
        expect(result).toBe(true)
    })

    it('Update Method', async () => {
        const category = dbMock.categories[0]
        const partialCategory = { name: 'Procuração', description: 'Procuração Particular Judicial' }
        const updatedCategory = { id: category.id, ...partialCategory }

        mockCategoryRepositoryUpdate.mockReturnValueOnce(updatedCategory)

        const result = await categoryService.update(category.id, partialCategory)
        
        expect(mockCategoryRepositoryUpdate).toHaveBeenCalledWith(category.id, partialCategory)
        expect(result).toBe(updatedCategory)
    })

    it('GetCategories Method', async () => {
        mockCategoryRepositoryGetCategories.mockReturnValueOnce(dbMock.categories)
        
        const result = await categoryService.getCategories()
        
        expect(result).toBe(dbMock.categories)
    })
})