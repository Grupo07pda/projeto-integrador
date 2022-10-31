const criarServico= async(req,res)=>{
     try{
        const db = require('../../connection/db');
        const servico = require('../../models/servico');
        await db.sync();
        const{nome_animal, servicos, porte, especie, nome_dono, cpf, telefone, horario} = req.body;
        console.log(nome_animal, servicos, porte, especie, nome_dono, cpf, telefone, horario);
        const novoServico = await servico.create({
            nome_animal,
            servicos,
            porte,
            especie,
            nome_dono,
            cpf,
            telefone,
            horario
        });
        console.log(novoServico)
        return res.status(201).json({servico:novoServico});   
    
}catch(error){
    console.log(error);
}
}

module.exports = criarServico;