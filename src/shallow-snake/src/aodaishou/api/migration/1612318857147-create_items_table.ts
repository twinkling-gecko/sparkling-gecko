import {MigrationInterface, QueryRunner} from "typeorm";

export class createItemsTable1612318857147 implements MigrationInterface {
    name = 'createItemsTable1612318857147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `items` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `image_url` varchar(255) NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `user_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `items` ADD CONSTRAINT `FK_3b934e62fb52bac909e0ddf5422` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `items` DROP FOREIGN KEY `FK_3b934e62fb52bac909e0ddf5422`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("DROP TABLE `items`");
    }

}
