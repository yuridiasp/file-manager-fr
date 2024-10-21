import { ipcMain } from 'electron'

ipcMain.on('', (event) => {
    event.returnValue = ""
})