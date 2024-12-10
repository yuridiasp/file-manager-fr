import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    build: {
        rollupOptions: {
          external: [
            "typeorm", // Exclui o TypeORM do pacote final
            "sqlite3", // Garante que o driver SQLite seja tratado como dependência externa
          ],
        },
    },
});
