import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUserAddActived1682383720194
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.users ADD actived boolean NULL;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.users ADD actived boolean NULL;
      `);
  }
}
