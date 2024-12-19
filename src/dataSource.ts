import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/backend/database/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [
    "./src/backend/entities/*.ts"
  ],
  migrations: [
    "./src/backend/database/migrations/*.ts"
  ],
  // Adicione esta configuração para evitar carregar drivers desnecessários
  extra: {
    driver: "sqlite3", // Força o uso do driver SQLite
  },
});

export default AppDataSource;