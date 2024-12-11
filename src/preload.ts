import { contextBridge, ipcRenderer } from 'electron'

import Category from './backend/entities/Category'

contextBridge.exposeInMainWorld('API', {
    createCategory: (name: string, description: string) => ipcRenderer.invoke('create-category', name, description),
    findByIdCategory: (id: string) => ipcRenderer.invoke('find-by-id-category', id),
    deleteCategory: (id: string) => ipcRenderer.invoke('delete-category', id),
    updateCategory: (id: string, data: Partial<Category>) => ipcRenderer.invoke('update-category', id, data),
    getCategoryies: () => ipcRenderer.invoke('get-categoryies'),
})