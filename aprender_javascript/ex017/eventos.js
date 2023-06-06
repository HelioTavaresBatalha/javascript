//Eventos Onclick- Aciona quando o rato for clicado
function carregarConteudo() {
    document.getElementById("conteudo").innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
}
//Aciona quando o rato ficar sobre a zona de ação
function mouseOver() {
    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}
//Aciona quando o rato sair da zona de ação
function onmouseOut() {
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
};


// Muitissimo importante dominar isso
function converTexto() {
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
};

//Funções Onkeyup para válidar a senha no formulário
function validarSenha() {
    var senha = document.getElementById("senha").value;
    if (senha == "" || senha.length <= 5) {
        document.getElementById("erroSenha").innerHTML = "<span style='color:red;'> Prencha o campo senha com o minimo 6 caracteres";
    } else {
        document.getElementById("erroSenha").innerHTML = "<span style='color:green;'> Senha válida";
    }
};