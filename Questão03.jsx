import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');

  // Dentro do segundo then, percorre-se o objeto "data" para encontrar as capitais de maior e menor população, bem como seus respectivos índices no vetor.
  // Esses valores são armazenados nas variáveis de estado "capitalMaiorPopulacao" e "capitalMenorPopulacao".

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then((response) => response.json())
      .then((data) => {
        let maiorPopulacao = null;
        let menorPopulacao = null;
        let indexMaiorPopulacao = 0;
        let indexMenorPopulacao = 0;

        // Tanto maiorPopulacao quanto menorPopulacao são inicializados com o valor null.

        data.forEach((country, index) => {
          const population = country.population;
          if (maiorPopulacao === null || population > maiorPopulacao) {
            maiorPopulacao = population;
            indexMaiorPopulacao = index;
          }
          if (menorPopulacao === null || population < menorPopulacao) {
            menorPopulacao = population;
            indexMenorPopulacao = index;
          }
        });

        // Depois de verificado se essas variáveis são null ou se o valor da população é maior/menor do que o valor atual, em caso afirmativo, as variáveis maiorPopulacao e menorPopulacao são atualizadas com os novos valores


        setCapitalMaiorPopulacao(data[indexMaiorPopulacao].capital[0]);
        setCapitalMenorPopulacao(data[indexMenorPopulacao].capital[0]);
      })
      .catch((error) => console.log(error));
  }, []);


  // No retorno JSX do componente, são exibidas na tela as capitais de maior e menor população.
  return (
    <div>
      <h1>Questão 03</h1>
      <p>Capital com maior população: {capitalMaiorPopulacao}</p>
      <p>Capital com menor população: {capitalMenorPopulacao}</p>
    </div>
  );
};

export default Questao03;