// criando variavel global, pq ela não esquece das informacoes colocadas
// mesmo que sempre seja adicionada novas informações.
var carros = [];

function adicionar() {
    var modelo_entrada = document.getElementById("modelo");
    var preco_entrada = document.getElementById("preco");
    var modelo = modelo_entrada.value;
    var preco = Number(preco_entrada.value);

    // verificando se valores digitados são válidos

    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Digite valores válidos");
        modelo_entrada.focus;
        return;
    } else {
        carros.push({ modelo: modelo, preco: preco })
    }
    //limpando caixa de input

    preco_entrada.value = "";
    modelo_entrada.value = "";
    modelo_entrada.focus();
    //chamando funcao para listar carro adicionado

    listar();
}
var BtAdicionar = document.getElementById("BtAdicionar");
BtAdicionar.addEventListener("click", adicionar);

function listar() {
    // verificando se existem carros para serem listados

    if (carros.length < 0) {
        alert("Não existem carros para serem listados");
        return;
    }
    // criando variavel para mostrar carros adicionados na tela

    var lista_carros = "";

    // criando laço para verificar itens adicionados e mostrar na tela

    for (var i = 0; i < carros.length; i++) {
        lista_carros += carros[i].modelo + " - " + "R$" + carros[i].preco.toFixed(2) + "\n";
    }
    document.getElementById("mostrarLista").textContent = lista_carros;
}
var BtListar = document.getElementById("BtListar");
BtListar.addEventListener("click", listar);

function filtrar() {
    // filtrar valor predefinido pelo usuario

    var valor_dado = Number(document.getElementById("preco").value);
    var lista_carros = "";

    // verificando se existem valores que sejam compativeis com o valor digitado

    for (var i = 0; i < carros.length; i++) {
        if (carros[i].preco <= valor_dado) {
            lista_carros += carros[i].modelo + " - " + "R$" + carros[i].preco.toFixed(2) + "\n";
        }
    }
    if (lista_carros == "") {
        document.getElementById("mostrarLista").textContent = "Não existem carros no preço definido"
    } else {
        document.getElementById("mostrarLista").textContent = "Carros de até R$" + valor_dado.toFixed(2) +
            "\n----------------------------------\n" + lista_carros;
    }

}
var BtFiltrar = document.getElementById("BtFiltrar");
BtFiltrar.addEventListener("click", filtrar);