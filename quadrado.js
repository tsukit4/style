document.addEventListener('DOMContentLoaded', function () {
    const seletorCor = document.getElementById('seletorCor');
    const quadrado = document.getElementById('quadrado');
    const corAtualTexto = document.getElementById('corAtual');
 
    seletorCor.addEventListener('change', function () {
      const corSelecionada = this.value;
      if (corSelecionada) {
        quadrado.style.backgroundColor = corSelecionada;
        corAtualTexto.textContent = `Cor atual: ${corSelecionada}`;
      } else {
        quadrado.style.backgroundColor = 'transparent';
        corAtualTexto.textContent = 'Cor atual: Nenhuma';
      }
    });
  });
 