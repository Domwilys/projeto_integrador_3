const connection = require('./connection');

const getAll = async () => {
    const [depoiments] = await connection.execute("SELECT * FROM depoiments");
    return depoiments;
}

const createDepoiment = async (depoiment) => {
    const { nome, email, ocupacao, depoimento } = depoiment;

    const insertQuerry = 'INSERT INTO depoiments(nome, email, ocupacao, depoimento) VALUES (?, ?, ?, ?);'
    //var dataAtual = new Date(Date.now()).toUTCString();

    const [createdDepoiment] = await connection.execute(insertQuerry, [nome, email, ocupacao, depoimento]);

    return createdDepoiment;
}

module.exports = {
    getAll,
    createDepoiment
}