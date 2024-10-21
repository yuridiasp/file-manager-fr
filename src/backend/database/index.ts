import "reflect-metadata"
import { DataSource } from "typeorm"

import { Document } from "../entities/Document"

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "test",
    entities: [Document],
    synchronize: true,
    logging: false,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))