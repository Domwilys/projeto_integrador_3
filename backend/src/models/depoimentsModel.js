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

    return {insertId: createdDepoiment.insertId};
}

const deleteDepoiments = async (id) => {
    const deleteQuerry = 'DELETE FROM depoiments WHERE id = ?';
    const removedDepoiment = await connection.execute(deleteQuerry, [id]);
    return removedDepoiment;
}

const updateDepoiments = async (id, depoiment) => {
    const updateQuerry = 'UPDATE depoiments SET nome = ?, email = ?, ocupacao = ?, depoimento = ? WHERE id = ?';

    const { nome, email, ocupacao, depoimento} = depoiment;

    const updatedDepoiment = await connection.execute(updateQuerry, [nome, email, ocupacao, depoimento, id]);

    return updatedDepoiment;
}

module.exports = {
    getAll,
    createDepoiment,
    deleteDepoiments,
    updateDepoiments
}