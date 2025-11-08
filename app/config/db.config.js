module.exports = {
  HOST: "ep-bitter-term-a49k9xa1-pooler.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_fIp3MjVldnC6",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};