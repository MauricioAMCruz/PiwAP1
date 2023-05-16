import React, { useState, useEffect } from 'react';


// No componente Questao01A, é exibida uma lista dos nomes dos alunos cuja média é maior ou igual a 6.0. Isso é feito mapeando o array de alunos e verificando a média correspondente no vetor de médias.

const Questao01A = () => {
  const alunos = [
    { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
    { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
    { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
  ];

  const [medias, setMedias] = useState([]);

  

  
  useEffect(() => {
    const calcularMedias = () => {
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      setMedias(medias);
    };

    calcularMedias();
  }, [alunos]);



  return (
    <div>
      <h2>Alunos com média maior ou igual a 6.0:</h2>
      <ul>
        {alunos.map((aluno, index) => {

        // Esse é o if que fará com que apenas os alunos com média igual ou maior que 6 sejam exibidos.
          if (medias[index] >= 6.0) {
            return <li key={index}>{aluno.nome}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

function Questao01B({ alunos }) {
  const [medias, setMedias] = useState([]);

  //O useEffect irá calcular as médias de cada aluno, para armazená-las em medias

  useEffect(() => {
    const calcularMedias = () => {
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      setMedias(medias);
    };

    calcularMedias();
  }, [alunos]);


  //O valor de medias será retornado ao componente Questão01A, para ser exibido em jsx.

  return <>{medias}</>;
}




const Questao01 = () => {
  return (
    <div>
      <h1>Questão 01</h1>
      <Questao01A>
        <Questao01B alunos={[
          { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
          { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
          { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
        ]} />
      </Questao01A>
    </div>
  );
};

export default Questao01;