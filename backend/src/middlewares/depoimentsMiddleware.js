const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.nome == undefined && body.email == undefined && body.ocupacao == undefined && body.depoimento == undefined) {
        return res.status(400).json({ message: "All the fiels are required" });
    }

    if(body.nome == "" || body.email == "" || body.ocupacao == "" || body.depoimento == "") {
        return res.status(400).json({ message: "The fields cannot be empty"});
    }

    next();
}

module.exports = {
    validateBody
}