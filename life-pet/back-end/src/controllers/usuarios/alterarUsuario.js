const alterar = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const id = req.params.id;
    const { nome, email, senha } = req.body;
    const pessoa = await usuario.findByPk(id); 
    await usuario.update({
      nome: nome || pessoa.nome,
      email: email || pessoa.email,
      senha: senha || pessoa.senha,
      logado: pessoa.logado
    }, { where: { id: id }});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.status(200).json({usuario: usuarioAtualizado});
}

module.exports = alterar;