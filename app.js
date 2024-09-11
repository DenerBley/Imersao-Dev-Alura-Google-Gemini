function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    
    let resultados = "";
    let encontrouResultados = false; // Flag para verificar se algum resultado foi encontrado

    if (campoPesquisa.length >= 3) { // Exigir pelo menos 3 caracteres
        for (let dado of dados) {
            if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais Informações</a>
                    </div>`;
                encontrouResultados = true;
            }
        }

        // Se não encontrou nenhum resultado correspondente
        if (!encontrouResultados) {
            resultados = "Nenhum resultado encontrado para sua pesquisa.";
        }
    } else {
        // Condicional para pesquisas curtas
        resultados = "Digite pelo menos 3 caracteres para realizar a pesquisa.";
    }

    section.innerHTML = resultados;
}
