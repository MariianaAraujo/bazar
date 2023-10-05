function adicionarEstilo() {
    var campoRoupaFavorita = document.querySelector('#ROUPA')
    var RoupaFavorita = campoFilmeFavorito.value
    if (RoupaFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(RoupaFavorita)
    } else {
        alert("Imagem inválida")
    }
    campoRoupaFavorita.value = ""
}

function listarFilmesNaTela(filme) {
    var listaRoupa = document.querySelector('#listaRoupa')
    var elementoRoupa = "<img src=" + Roupa + ">"
    listaRoupa.innerHTML = listaRoupa.innerHTML + elementoRoupa
}
