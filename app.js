// Função para buscar rota sustentável e redirecionar para a página de resultados
function findRoute() {
    let origem = document.getElementById('origem').value;
    let destino = document.getElementById('destino').value;
  
    if (origem && destino) {
      // Cria a URL com os parâmetros de origem e destino
      let routeUrl = `resultado-rota.html?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`;
      
      // Redireciona para a página de resultados com a origem e destino na URL
      window.location.href = routeUrl;
    } else {
      alert("Por favor, selecione tanto a origem quanto o destino.");
    }
  }
  