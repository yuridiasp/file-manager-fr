import { app, BrowserWindow } from 'electron';
import CreateWindow from './infrastructure/CreateWindow';
import addChannels from './channels/channels';
import AppDataSource from '../dataSource';

const App = () => {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', async () => {
        await AppDataSource.initialize()
        addChannels()
        CreateWindow()
    })

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            CreateWindow()
        }
    })

    return app
}

export default App