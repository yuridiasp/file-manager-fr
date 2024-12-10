import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('API', {
    createCategory: ipcRenderer.invoke('create-category'),
    findByIdCategory: ipcRenderer.invoke('find-by-id-category'),
    deleteCategory: ipcRenderer.invoke('delete-category'),
    updateCategory: ipcRenderer.invoke('update-category'),
    getCategoryies: ipcRenderer.invoke('get-categoryies'),
})