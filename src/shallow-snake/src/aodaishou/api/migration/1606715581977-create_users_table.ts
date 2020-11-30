import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsersTable1606715581977 implements MigrationInterface {
    name = 'createUsersTable1606715581977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` text NOT NULL, `encrypted_password` text NOT NULL, `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `deleted_at` timestamp(0) NULL DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
