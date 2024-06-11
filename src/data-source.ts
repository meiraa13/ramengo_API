import { DataSource, Repository } from "typeorm";
import app from "./app";
import Broth from "./entities/broth.entity";
import Protein from "./entities/protein.entity";
import Order from "./entities/order.entity";

export const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'marme455',
  database: 'ramengo',
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