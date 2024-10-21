import path from 'path'
import { BrowserWindow } from "electron";

const CreateWindow = (width = 800, height = 600) => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width,
      height,
      webPreferences: {
        preload: path.join(__dirname, '../../preload.js'),
      },
    })
  
    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
      mainWindow.loadFile(path.join(__dirname, `../../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
    }
  
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
}

export default CreateWindow