import {MigrationInterface, QueryRunner} from "typeorm";

export class createItemValuesTable1611587990847 implements MigrationInterface {
    name = 'createItemValuesTable1611587990847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `itemValues` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `observated_time` timestamp(0) NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `itemId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `itemValues` ADD CONSTRAINT `FK_0da5e8781d3ea4edbfd8a1b50f9` FOREIGN KEY (`itemId`) REFERENCES `items`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `itemValues` DROP FOREIGN KEY `FK_0da5e8781d3ea4edbfd8a1b50f9`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("DROP TABLE `itemValues`");
    }

}
