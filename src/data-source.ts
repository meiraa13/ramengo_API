import { DataSource, Repository } from "typeorm";
import app from "./app";
import Broth from "./entities/broth.entity";
import Protein from "./entities/protein.entity";
import Order from "./entities/order.entity";
import "dotenv/config"

export const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.HOST!,
  port: Number(process.env.PORT!),
  username: process.env.DATABASE_USERNAME!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected!')
        app.listen(3000, () => {
            console.log('Server running on port 3000')
        })
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })

const brothRepository: Repository<Broth> = AppDataSource.getRepository(Broth)
const proteinRepository:Repository<Protein> = AppDataSource.getRepository(Protein)
const orderRepository:Repository<Order> = AppDataSource.getRepository(Order)

export { brothRepository, proteinRepository, orderRepository }