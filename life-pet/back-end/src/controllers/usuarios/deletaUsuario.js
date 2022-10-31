const deletar = async (req, res) => {
    let usuario = require("../../models/usuario")
    const id = req.params.id;
    const pessoa = await usuario.findByPk(id);
    await usuario.destroy({
        where: {
            id: id
        }
    });
    return res.status(200).json({ mensagem: "Usuario deletado com sucesso!", usuario: pessoa });
}

module.exports = deletar;