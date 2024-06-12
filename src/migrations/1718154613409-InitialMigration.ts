import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1718154613409 implements MigrationInterface {
    name = 'InitialMigration1718154613409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "proteins" ("id" SERIAL NOT NULL, "imageInactive" character varying NOT NULL, "imageActive" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_398b8a05b8dd76679d0128a1d22" UNIQUE ("name"), CONSTRAINT "PK_32956cc233035917f693d0412cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "brothId" integer, "proteinId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "broths" ("id" SERIAL NOT NULL, "imageInactive" character varying NOT NULL, "imageActive" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_ac679fd0ba29ba25d153332f2fb" UNIQUE ("name"), CONSTRAINT "PK_f9ccad7cdda83e46906104a9228" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_d97bd962b7dbe2cf1a9eb7fb0db" FOREIGN KEY ("brothId") REFERENCES "broths"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_ddc193360a6984d832b437eb49b" FOREIGN KEY ("proteinId") REFERENCES "proteins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_ddc193360a6984d832b437eb49b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_d97bd962b7dbe2cf1a9eb7fb0db"`);
        await queryRunner.query(`DROP TABLE "broths"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "proteins"`);
    }

}
