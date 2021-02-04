import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTokenToUser1612446239761 implements MigrationInterface {
    name = 'AddTokenToUser1612446239761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `token` text NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `token`");
    }

}
