const { DataSource } = require("typeorm");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const { PinoLogger } = require('../../logger');

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: "SoftMark#2024$",
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  logger: new PinoLogger(),
  entities: [
    path.join(__dirname, "../entities/**/*.js"),
    path.join(__dirname, "../entities/trash/**/*.js"), // Include trash entities here
  ],
});


module.exports = dataSource;
