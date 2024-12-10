import { ipcMain } from 'electron'
import CategoryController from '../controllers/CategoryController'

function addChannels() {
    const categoryController = new CategoryController()
    ipcMain.handle('create-category', categoryController.create)
    ipcMain.handle('find-by-id-category', categoryController.findById)
    ipcMain.handle('delete-category', categoryController.delete)
    ipcMain.handle('update-category', categoryController.update)
    ipcMain.handle('get-categoryies', categoryController.getCategories)
}

export default addChannels