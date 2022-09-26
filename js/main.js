$(document).ready(function () {
  $(`#telefone`).mask(`(00) 00000-0000`, {
    placeholder: "(__) _____-____",
  });

  $(`#cpf`).mask(`000.000.000-00`, {
    placeholder: "___.___.___-__",
  });

  $(`#cep`).mask(`00000-000`, {
    placeholder: "_____-___",
  });

  $(`form`).validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      enderecoCompleto: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, preencha seu nome",
      telefone: "Por favor, preencha seu telefone",
      email: "Por favor, preencha seu email",
      cpf: "Por favor, preencha seu cpf",
      enderecoCompleto: "Por favor, preencha seu endereço",
      cep: "Por favor, preencha seu cep",
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
