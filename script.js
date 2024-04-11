window.addEventListener("scroll", function () {
  var imagens = document.querySelectorAll(".imagemSeguindo")
  var posicaoTopo =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  imagens.forEach(function (imagem, index) {
    imagem.style.top = 20 + index * 130 + posicaoTopo / 5 + "px" // Ajuste conforme necessário
  })
})

