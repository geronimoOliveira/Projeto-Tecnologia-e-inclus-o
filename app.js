function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    // O ID "resultados-pesquisa" deve corresponder a um elemento na sua página HTML
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campoPesquisa").value
  
    if(!campoPesquisa){section.innerHTML = "Resultado não encontrado, não existe uma palavra chave."
  
        return
    }
  
 campoPesquisa = campoPesquisa.toLowerCase()
 

    // Verifica se a seção foi encontrada (para fins de depuração)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada dado na lista de resultados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações...</a>
          </div>
        `;
      }
      // Constrói o HTML para cada resultado, formatando os dados dinamicamente
  
    }
  
    if (!resultados){

        resultados = "<p>Resultado não encontrado.</p>"
    }
    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }