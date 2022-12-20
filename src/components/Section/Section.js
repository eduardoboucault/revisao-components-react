import React from "react";

export const Section = () => {
  return (
    <section>
      <p>
        Como visto no material assíncrono, o React permite que separemos o
        código em arquivos diferentes para partes diferentes.
      </p>
      <p>
        Por isso, neste exercício a tarefa é separar os elementos que ainda não
        foram componentizados.
      </p>
      <p>
        Para isso, veja o código e pense quais partes podem se tornar um
        componente. Então crie uma pasta para os componentes e novas
        pastas/arquivos para estes componentes e reorganize o código.
      </p>
      <p>
        <strong>Para isso, lembre-se das regras a seguir:</strong>
      </p>
      <ul>
        <li>Primeira letra do nome maiúscula;</li>
        <li>Deve retornar um JSX (com um único pai);</li>
        <li>Caso ache necessário, confira novamente o material!</li>
      </ul>
    </section>
  );
};
