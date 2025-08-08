module.exports = {
  HOST: "ep-super-paper-ae2oimb5-pooler.c-2.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Prm5yEkGIhZ7",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};