export default {
  type: 'mysql',
  host: process.env.DB_HOSTNAME || 'nishiki',
  port: 3306,
  username: process.env.DB_USERNAME || 'nishiki',
  password: process.env.DB_PASSWORD || 'mamushi',
  database: process.env.DB_DATABASE || 'sparkling',
  synchronize: false,
  logging: false,
  entities: ['api/entity/**/*.ts'],
  migrations: ['api/migration/**/*.ts'],
  subscribers: ['api/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'api/entity',
    migrationsDir: 'api/migration',
    subscribersDir: 'api/subscriber',
  },
}
