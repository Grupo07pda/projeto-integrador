document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei criar");
})  
 function criar(){
    const inputNome = document.getElementById("inputNome");
    const nome = inputNome.value

    const inputEmail = document.getElementById("inputEmail");
    const email = inputEmail.value

    const inputSenha = document.getElementById("inputSenha");
    const senha = inputSenha.value
   
    const url= "http://localhost:3000/usuario"
    fetch( url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome, 
            email,
            senha
        })
    })
    .then(res => res.json())
    .then(res => {console.log(res);
        const usuarios = res.user
        if(usuarios){
            window.alert("Cadastro com sucesso, faça o login e continue.")
            localStorage.setItem("user_id", usuarios.id)
            localStorage.setItem("user_nome",usuarios.nome)
            localStorage.setItem("user_email", usuarios.email)
            window.alert("Cadastro com sucesso, faça o login e continue")
        }else{
            window.alert("Cadastro falhou, tente mais tarde!!!")
         }

    })
    
 }
