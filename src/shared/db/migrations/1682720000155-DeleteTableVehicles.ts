import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteTableVehicles1682720000155 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table vehicles`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table vehicles`);
  }
}
