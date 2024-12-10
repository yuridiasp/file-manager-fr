import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./backend/database/database.sqlite",
  entities: ["./backend/database/entity/*.ts"], // Caminho para suas entidades
  synchronize: true, // Sincroniza automaticamente o esquema do banco (somente para desenvolvimento)
})