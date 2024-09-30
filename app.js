function handleClick() {
  alert("Botão clicado!");
}

function handleChange(event) {
  alert("O valor mudou para: " + event.target.value);
}

function handleMouseOver() {
  alert("Mouse sobre o botão!");
}

function handleMouseOut() {
  alert("Mouse saiu do botão!");
}

function handleKeyDown(event) {
  alert("Tecla pressionada: " + event.key);
}

function handleLoad() {
  alert("Página carregada!");
}









function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function mostrarAluno() {
  const numeroSorteado = getRndInteger(1, 6); // Alterar o 6 para o total de alunos
  let aluno;

  if (numeroSorteado === 1) {
      aluno = "Aluno 1: Isa";
  } else if (numeroSorteado === 2) {
      aluno = "Aluno 2: Gui";
  } else if (numeroSorteado === 3) {
      aluno = "Aluno 3: Andrey";
  } else if (numeroSorteado === 4) {
      aluno = "Aluno 4: Lian";
  } else if (numeroSorteado === 5) {
      aluno = "Aluno 5: Nico";
    } else if (numeroSorteado === 6) {
      aluno = "Aluno 5: Lucas";
    } else if (numeroSorteado === 7) {
      aluno = "Aluno 5: Paulino";
    } else if (numeroSorteado === 8) {
      aluno = "Aluno 5: Tais";
    } else if (numeroSorteado === 9) {
      aluno = "Aluno 5: Felipe";
  }

  document.getElementById('sorteio').innerHTML = aluno;
}
