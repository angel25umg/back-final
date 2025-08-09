module.exports = {
  HOST: "ep-misty-math-ael6batk-pooler.c-2.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_DAT7l9arzVEB",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};