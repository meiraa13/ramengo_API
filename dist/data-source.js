"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRepository = exports.proteinRepository = exports.brothRepository = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("./app"));
const broth_entity_1 = __importDefault(require("./entities/broth.entity"));
const protein_entity_1 = __importDefault(require("./entities/protein.entity"));
const order_entity_1 = __importDefault(require("./entities/order.entity"));
require("dotenv/config");
exports.AppDataSource = new typeorm_1.DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log('Database connected!');
    app_1.default.listen(3000, () => {
        console.log('Server running on port 3000');
    });
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
const brothRepository = exports.AppDataSource.getRepository(broth_entity_1.default);
exports.brothRepository = brothRepository;
const proteinRepository = exports.AppDataSource.getRepository(protein_entity_1.default);
exports.proteinRepository = proteinRepository;
const orderRepository = exports.AppDataSource.getRepository(order_entity_1.default);
exports.orderRepository = orderRepository;
