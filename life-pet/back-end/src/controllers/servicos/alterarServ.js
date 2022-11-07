const alterar = async (req,res)=>{
        let serv = require ('../../models/servico');
        const id = req.params.id;
        const{nome_animal, servicos, porte, especie, nome_dono, cpf, telefone, horario} = req.body;
        const agenda = await serv.findByPk(id);
        await serv.update({
            nome_animal: nome_animal || agenda.nome_animal,
            servicos: servicos || agenda.servicos,
            porte: porte || agenda.porte,
            especie: especie || agenda.especie,
            nome_dono: nome_dono || agenda.nome_dono,
            cpf: cpf || agenda.cpf,
            telefone: telefone || agenda.telefone,
            horario: horario || agenda.horario
        }, { where: { id: id }});
        const servicoAtualizado = await serv.findByPk(id);
        return res.status(200).json({serv: servicoAtualizado});


}

module.exports = alterar;