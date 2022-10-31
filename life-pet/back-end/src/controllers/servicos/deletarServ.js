const deletar = async (req, res) => {
    let servico = require("../../models/servico");
    const id = req.params.id;
    const agendar = await servico.findByPk(id);
    await servico.destroy({
        where: {
            id:id
        }
    });
    return res.status(200).json({ mensagem: "Serviço deletado com sucesso!", servico: agendar});
}

module.exports = deletar;