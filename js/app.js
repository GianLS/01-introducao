function acao01() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("data-nascimento").value;
    alert(`Olá: ${nome} seu e-mail é: ${email} e você nasceu em: ${dataNascimento}`);
}

function acao02() {
    var numero1 = 10;
    var numero2 = 15;
    var numero3 = 7

    var total = numero1 + numero2 + numero3;

    alert(total);
}