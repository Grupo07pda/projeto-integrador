const pegarServico = async(req,res) =>{
    const servico = require('../../models/servico');
    const servicos = await servico.findAll();
    return res.status(200).json({servicos: servicos});
}

module.exports = pegarServico; 