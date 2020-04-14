
document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("Macacao");
    dataForm.addEventListener("submit", async function (event) {
        event.preventDefault()


        const nome = document.getElementById("add.").value 
        const sobrenome = document.getElementById("add23").value 
        const nomecompleto = nome + sobrenome;

        alert(nomecompleto)

    })
})        
