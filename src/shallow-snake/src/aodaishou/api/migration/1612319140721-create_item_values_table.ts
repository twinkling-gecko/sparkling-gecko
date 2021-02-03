import {MigrationInterface, QueryRunner} from "typeorm";

export class createItemValuesTable1612319140721 implements MigrationInterface {
    name = 'createItemValuesTable1612319140721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `item_values` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `observated_at` timestamp(0) NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `item_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `item_values` ADD CONSTRAINT `FK_d1b6789a06f258ea765985ed9d1` FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `item_values` DROP FOREIGN KEY `FK_d1b6789a06f258ea765985ed9d1`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("DROP TABLE `item_values`");
    }

}
