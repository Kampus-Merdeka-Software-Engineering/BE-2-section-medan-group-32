const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM users";

    return dbpool.execute(SQLQuery);
};

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email, password) 
                        VALUES('${body.name}', '${body.email}','${body.password}')`;


    return dbpool.execute(SQLQuery);
};

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET name = '${body.name}', email = '${body.email}', address = '${body.password}' 
                        WHERE id = ${idUser}`;

    return dbpool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `  DELETE FROM users 
                        WHERE id = ${idUser}`;

    return dbpool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};