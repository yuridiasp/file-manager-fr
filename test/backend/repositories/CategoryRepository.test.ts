import crypto from 'node:crypto'

import { iDatabase } from "../../../src/backend/database/db"
import CategoryRepository from "../../../src/backend/repositories/CategoryRepository"

let dbMock: iDatabase
let categoryRepository: CategoryRepository

describe('CategoryRepository', () => {

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

        categoryRepository = new CategoryRepository(dbMock)
    })

    afterEach(() => jest.restoreAllMocks())

    it('Create Method', async () => {
        const uuid = '84129e2c-c8a4-40c8-b61f-b3fce1b8b607'
        const name = 'Procuração', description = 'Procuração judicial'

        jest.spyOn(crypto, 'randomUUID').mockReturnValue(uuid)


        const result = await categoryRepository.create(name, description)
        
        expect(result).toBe(uuid)
    })

    it('FindById Method', async () => {
        const id = '1'

        const result = await categoryRepository.findById(id)
        
        expect(result).toEqual(dbMock.categories[0])
    })

    it('FindByName Method', async () => {
        const name = 'Contrato'

        const result = await categoryRepository.findByName(name)
        
        expect(result).toEqual(dbMock.categories[0])
    })

    it('Delete Method', async () => {
        const id = '1'

        const result = await categoryRepository.delete(id)
        
        expect(result).toBe(true)
    })

    it('Update Method', async () => {
        const id = '1'

        const newData = {
            description: "Contrato de Honorários Cível",
            name: "Contrato"
        }

        const result = await categoryRepository.update(id, newData)
        
        expect(result).toEqual({ id, ...newData })
    })

    it('GetCategories  Method', async () => {
        const result = await categoryRepository.getCategories()
        
        expect(result).toEqual(dbMock.categories)
    })
})