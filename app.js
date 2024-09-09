function buscar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  if (campoPesquisa == "") {
    alert("Digite algo no campo de busca!")
    return
  }
  let encontrouResultado = false
  let resultados = "";
  let titulo = ""
  let descricao = ""
  let tags = ""

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
            <h2> 
             <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `;
    encontrouResultado = true
    }
  }
  if (!encontrouResultado) {
    section.innerHTML = "<p>Nada foi encontrado!!</p>"
  }else {
  section.innerHTML = resultados;
  }
}
