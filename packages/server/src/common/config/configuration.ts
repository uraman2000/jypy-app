export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  BASE_URL: process.env.BASE_URL,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
