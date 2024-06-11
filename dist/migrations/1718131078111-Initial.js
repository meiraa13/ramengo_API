"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1718131078111 = void 0;
class Initial1718131078111 {
    constructor() {
        this.name = 'Initial1718131078111';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "proteins" ("id" SERIAL NOT NULL, "imageInactive" character varying NOT NULL, "imageActive" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_398b8a05b8dd76679d0128a1d22" UNIQUE ("name"), CONSTRAINT "PK_32956cc233035917f693d0412cf" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "brothId" integer, "proteinId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "broths" ("id" SERIAL NOT NULL, "imageInactive" character varying NOT NULL, "imageActive" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_ac679fd0ba29ba25d153332f2fb" UNIQUE ("name"), CONSTRAINT "PK_f9ccad7cdda83e46906104a9228" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_d97bd962b7dbe2cf1a9eb7fb0db" FOREIGN KEY ("brothId") REFERENCES "broths"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_ddc193360a6984d832b437eb49b" FOREIGN KEY ("proteinId") REFERENCES "proteins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_ddc193360a6984d832b437eb49b"`);
            yield queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_d97bd962b7dbe2cf1a9eb7fb0db"`);
            yield queryRunner.query(`DROP TABLE "broths"`);
            yield queryRunner.query(`DROP TABLE "orders"`);
            yield queryRunner.query(`DROP TABLE "proteins"`);
        });
    }
}
exports.Initial1718131078111 = Initial1718131078111;
