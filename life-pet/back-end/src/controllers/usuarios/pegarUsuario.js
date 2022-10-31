const pegar = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const usuarios = await usuario.findAll();

    return res.status(200).json({usuarios: usuarios})
}


const pegandoUsuario = async (req, res) => {
    try {
        const usuario = require('../../models/usuario');
        const id = req.params.id;
        const usuarios = await usuario.findByPk(id);
        console.log(usuarios);
        if(!usuarios){
        return res.status(401).json({message: "Usuário não encontrado"})
    }
    }catch(err){
        res.json({message:"Error"})
    }
}


module.exports = pegar, pegandoUsuario;