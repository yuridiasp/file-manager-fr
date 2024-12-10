import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [
    "./backend/entities/*.ts"
  ],
  migrations: [
    "./backend/migrations/*.ts"
  ],
  // Adicione esta configuração para evitar carregar drivers desnecessários
  extra: {
    driver: "sqlite3", // Força o uso do driver SQLite
  },
});

export default AppDataSource;