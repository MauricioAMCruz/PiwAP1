import React, { useState } from 'react';

// A variável de estado mudar é inicializada como false usando o useState e controla qual é o sprite do Gallade que é mostrado.
// O sprite pode ser tanto o de frente ou o de costas.

const Questao02 = () => {
  const [mudar, setMudar] = useState(false);

  
  const mudarFigura = () => {
    setMudar(!mudar);
  };

  // O caminho do sprite frontal é armazenado na variável imagemFrente e o caminho do sprite de costas é armazenado na variável imagemCostas.
  // Dependendo do valor da variável mudar, é mostrado o sprite correspondente.
  const imagemFrente = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png';
  const imagemCostas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/475.png';

  return (
    // Quando o botão é clicado, a função mudarFigura é chamada, alterando o valor da variável mudar para o oposto do seu valor atual.
    // Isso faz com que o sprite do Gallade alterne entre o de frente e o de costas.
    <div> 
      <h1>Questão 02</h1>
      <img src={mudar ? imagemCostas : imagemFrente} alt="Gallade" />
      <button onClick={mudarFigura}>Mudar</button>
    </div>
  );
};


export default Questao02;

// Comentário extra: Gallade é o melhor Pokémon :D