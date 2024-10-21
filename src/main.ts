import "reflect-metadata"

import App from './backend/app';

const app = App()

if (require('electron-squirrel-startup')) {
  app.quit()
}