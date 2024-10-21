import { createRoot } from 'react-dom/client'
import { App } from './src/frontend/app'

const root = createRoot(document.getElementById('app'))
root.render(App())