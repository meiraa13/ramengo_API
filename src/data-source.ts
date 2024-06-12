import { DataSource, DataSourceOptions, Repository } from "typeorm";
import path from "path";
import "dotenv/config";
import Broth from "./entities/broth.entity";
import Protein from "./entities/protein.entity";
import Order from "./entities/order.entity";


const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

const AppDataSource = new DataSource(settings());

const brothRepository: Repository<Broth> = AppDataSource.getRepository(Broth)
const proteinRepository:Repository<Protein> = AppDataSource.getRepository(Protein)
const orderRepository:Repository<Order> = AppDataSource.getRepository(Order)

export { AppDataSource ,brothRepository, proteinRepository, orderRepository }