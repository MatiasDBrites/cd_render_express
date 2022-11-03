function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: process.env.DB_DEV_USER || 'matiasdbrites',
    password: process.env.DB_DEV_PASSWORD|| 'xKrnCwHfgmJoItdOM1ybDvEjgnLpDhoj',
    database: process.env.DB_DEV_NAME|| 'express_wyd3',
    host: process.env.DB_DEV_HOST|| 'dpg-cdh8a7ien0hl21l68ns0-a',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || '123456',
    database: process.env.DB_DEV_DB_NAME || 'Prueba2',
    host: process.env.DB_TEST_HOST || 'localhost',
    port: process.env.DB_TEST_PORT || 5432,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    logging: true,
    dialect: 'postgres',
  },
};

export default config;