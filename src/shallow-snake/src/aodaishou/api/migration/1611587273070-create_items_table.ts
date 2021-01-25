import {MigrationInterface, QueryRunner} from "typeorm";

export class createItemsTable1611587273070 implements MigrationInterface {
    name = 'createItemsTable1611587273070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `items` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `image_url` varchar(255) NOT NULL, `graph_type` varchar(255) NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `items` ADD CONSTRAINT `FK_40e681891fea5a4b3c5c2546d15` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `items` DROP FOREIGN KEY `FK_40e681891fea5a4b3c5c2546d15`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` timestamp(0) NULL");
        await queryRunner.query("DROP TABLE `items`");
    }

}
