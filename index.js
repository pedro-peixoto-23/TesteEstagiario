// Modificado por: Pedro Peixoto Viana de Oliveira

let sessao_formulario = window.document.getElementById('sessao_formulario');
let sessao_sucesso = window.document.getElementById('sucesso');
let formulario = window.document.getElementById('formulario');


formulario.addEventListener('submit', event => {
    event.preventDefault();

    let nome = window.document.querySelector('#nome').value;
    let email = window.document.querySelector('#email').value;
    let telefone = window.document.querySelector('#telefone').value;

    let erro_nome = window.document.getElementById('erroNome');
    let erro_email = window.document.getElementById('erroEmail');
    let erro_telefone = window.document.getElementById('erroTelefone');

    // Definindo como "none" para que, quando o usuário aperte o botão, atualize a mensagem de erro.
    erro_nome.style.display = "none";
    erro_email.style.display = "none";
    erro_telefone.style.display = "none";

    if (nome.trim().length === 0) {
        erro_nome.style.display = "block";
    } else if (email.trim().length === 0) {
        erro_email.style.display = "block";
    } else if (telefone.trim().length === 0) {
        erro_telefone.style.display = "block";
    } else {
        sessao_formulario.style.display = "none";
        sessao_sucesso.style.display = "block";

        const objeto_cadastro = {};

        objeto_cadastro.nome = nome;
        objeto_cadastro.email = email;
        objeto_cadastro.telefone = telefone;

        console.log(objeto_cadastro);
    }
});