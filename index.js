let message = "Hello Igor";
message = "Hello Igor 2";

// let metas = [
//   meta,
//   {
//     value: "Ler um livro por mês",
//     checked: false,
//   },
//   {
//     value: "Treinar todos os dias da semana",
//     ckecked: false,
//   },
// ];

const start = () => {
  let count = 1;
  while (count <= 10) {
    console.log(count);
    count = count + 1;
  }
};

start();

const start2 = () => {
  while (true) {
    let opcao = "sair";

    switch (opcao) {
      case "cadastrar":
        console.log("Vamos Cadastrar");
        break;
      case "listar":
        console.log("Vamos listar");
        break;
      case "sair":
        return;
    }
  }
};

start2();
