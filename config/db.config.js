module.exports = {
    HOST: "localhost",
    USER: "avd",
    PASSWORD: "avd",
    DB: "practice",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}