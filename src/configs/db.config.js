module.exports = {
    HOST: "localhost",
    USER: "pet_care_user",
    PASSWORD: "#Pet_care_123",
    DB: "pet_care",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};