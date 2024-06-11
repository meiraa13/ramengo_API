import { DataSource, Repository } from "typeorm";
import Broth from "./entities/broth.entity";
import Protein from "./entities/protein.entity";
import Order from "./entities/order.entity";
import "dotenv/config"

export const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  url:process.env.DATABASE_URL!,
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});


const brothRepository: Repository<Broth> = AppDataSource.getRepository(Broth)
const proteinRepository:Repository<Protein> = AppDataSource.getRepository(Protein)
const orderRepository:Repository<Order> = AppDataSource.getRepository(Order)

export { brothRepository, proteinRepository, orderRepository }