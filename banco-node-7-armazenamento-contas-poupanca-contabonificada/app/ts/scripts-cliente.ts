let clienteController = new ClienteController();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 300);
const c3 = new Conta('2', 500);
const clientes: Clientes = new Clientes();
const cli1 = new Cliente("Silas", "123");
const cli2 = new Cliente("Samuel", "321");
const cli3 = new Cliente("Sávio", "231");

const cliEspecial1 = new ClienteEspecial("Sarah", "111")
const cliEspecial2 = new ClienteEspecial("Steh", "222")

cliEspecial1.inserirDependente("Saulo", "333")
cliEspecial2.inserirDependente("Sofia", "444")

cli1.inserirConta(c1);
cli2.inserirConta(c2);
cli3.inserirConta(c3);
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);
clientes.inserir(cliEspecial1)
clientes.inserir(cliEspecial2)

console.log("Clientes: " + clientes.listar());
clientes.remover("321");
console.log("Clientes: " + clientes.listar());
console.log(clientes.pesquisar("231"))
console.log(cliEspecial1.dependentes)
console.log(cliEspecial2.dependentes)