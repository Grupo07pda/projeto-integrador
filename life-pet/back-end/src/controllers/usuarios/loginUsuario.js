const {compare} = require('bcrypt');

const login = async(req,res)=>{
    let usuario = require('../../models/usuario');
    const {email, senha} = req.body;
    const usuarioExistente = await usuario.findOne({where: {email: email}});
    console.log(usuarioExistente)
    if(!usuarioExistente){
        return res.status(401).json({message: "email ou senha invalido"});
    }
    console.log(usuarioExistente.senha)
    const senhaMatch = await compare(senha,usuarioExistente.senha);
    console.log(senhaMatch)
    if(!senhaMatch){
        return res.status(401).json({message: "email ou senha invalido"});
    }

    await usuario.update({
        id: usuarioExistente.id,
        nome: usuarioExistente.nome || usuarioExistente.nome,
        email: usuarioExistente.email || usuarioExistente.email,
        senha: usuarioExistente.senha|| usuarioExistente.senha,
        logado:true
      }, { where: { id: usuarioExistente.id }});
      const usuarioAtualizado = await usuario.findByPk(usuarioExistente.id);  
    return res.status(200).json({usuario:usuarioAtualizado})


}

module.exports = login;