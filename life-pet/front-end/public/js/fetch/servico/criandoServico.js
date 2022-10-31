document.addEventListener('DOMContentLoaded', function() {
    console.log("Entrei serviços")
})

async function criando(){
    const inputAnimal = document.getElementById("animal");
    const animal = inputAnimal.value;
    const inputServico = document.getElementById("servico");
    const servicos =inputServico.value;
    const inputPorte = document.getElementById("porte");
    const porte =inputPorte.value;
    const inputEspecie = document.getElementById("especie");
    const especie =inputEspecie.value;
    const inputNome = document.getElementById("nome");
    const nome =inputNome.value;
    const inputCpf = document.getElementById("cpf");
    const cpf =inputCpf.value;
    const inputTelefone = document.getElementById("telefone");
    const telefone =inputTelefone.value;
    const inputdata = document.getElementById("data");
    const data =inputdata.value;

    console.log(animal)
    console.log(servicos)
    console.log(porte)
    console.log(especie)
    console.log(nome)
    console.log(cpf)
    console.log(telefone)
    console.log(data)

    
    const url = "http://localhost:3000/servico"
   await fetch( url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
                 nome_animal:animal,
                 servicos,
                 porte,
                 especie,
                 nome_dono:nome,
                 cpf,
                 telefone,
                 horario:data
             })
    })
    .then(res => res.json())
    .then(res => {console.log(res);
        const servicos = res.servico
        if(servicos){
            window.alert("Agendamento realizado com sucesso!!!")
            localStorage.setItem("serv-id",servicos.id)
            localStorage.setItem("serv-animal", servicos.nome_animal)
            localStorage.setItem("serv-servicos", servicos.servicos)
            localStorage.setItem("serv-porte",servicos.porte)
            localStorage.setItem("serv-especie", servicos.especie)
            localStorage.setItem("serv-dono", servicos.nome_dono)
            localStorage.setItem("serv-cpf", servicos.cpf)
            localStorage.setItem("serv-telefone", servicos.telefone)
            localStorage.setItem("serv-data", servicos.data)
            window.alert("Agendamento realizado com sucesso!!!")
       
        }else{
        window.alert("Erro no agendamento, tente novamente.")
    }
       
    })
    
}