const MILISSEGUNDOS_POR_MINUTO = 1000 * 60;
const MILISSEGUNDOS_POR_HORA = MILISSEGUNDOS_POR_MINUTO * 60;
const MILISSEGUNDOS_POR_DIA = MILISSEGUNDOS_POR_HORA * 24;
const DATA_FINAL_DA_COPA = new Date("2026-07-19T18:00:00-03:00");
const mostrador = document.getElementById("mostrador");

function calcularTempoParaSerHexa() {
  const dataDeHoje = new Date();
  const tempoRestanteEmMs = DATA_FINAL_DA_COPA - dataDeHoje;
  const dias = Math.floor(tempoRestanteEmMs / MILISSEGUNDOS_POR_DIA);
  const horas = Math.floor((tempoRestanteEmMs % MILISSEGUNDOS_POR_DIA) / MILISSEGUNDOS_POR_HORA);
  const minutos = Math.floor((tempoRestanteEmMs % MILISSEGUNDOS_POR_HORA) / MILISSEGUNDOS_POR_MINUTO);

  return { dias, horas, minutos, tempoRestanteEmMs };
}

function atualizarMostrador() {
  const contagem = calcularTempoParaSerHexa();
  const partesDoTempo = [];

  if (contagem.dias > 0) {
    partesDoTempo.push(`${contagem.dias} ${contagem.dias === 1 ? "dia" : "dias"}`);
  }
  if (contagem.horas > 0) {
    partesDoTempo.push(`${contagem.horas} ${contagem.horas === 1 ? "hora" : "horas"}`);
  }
  if (contagem.minutos > 0) {
    partesDoTempo.push(`${contagem.minutos} ${contagem.minutos === 1 ? "minuto" : "minutos"}`);
  }

  if (contagem.tempoRestanteEmMs <= 0) {
    mostrador.innerHTML = "Já somos Hexa!";
    clearInterval(contador);
  } else {
    mostrador.innerHTML = partesDoTempo.join(", ") + "<br>Para você 🫵 ser hexa!";
  }
}

atualizarMostrador();
const contador = setInterval(atualizarMostrador, 1000);
