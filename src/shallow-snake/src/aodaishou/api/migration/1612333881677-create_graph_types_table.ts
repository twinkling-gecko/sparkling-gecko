import {MigrationInterface, QueryRunner} from "typeorm";

export class createGraphTypesTable1612333881677 implements MigrationInterface {
    name = 'createGraphTypesTable1612333881677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `graph_types` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `items` ADD `graph_type_id` int NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `items` ADD CONSTRAINT `FK_67f0034ff2b853af8b90ed5689b` FOREIGN KEY (`graph_type_id`) REFERENCES `graph_types`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `items` DROP FOREIGN KEY `FK_67f0034ff2b853af8b90ed5689b`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("ALTER TABLE `items` DROP COLUMN `graph_type_id`");
        await queryRunner.query("DROP TABLE `graph_types`");
    }

}
