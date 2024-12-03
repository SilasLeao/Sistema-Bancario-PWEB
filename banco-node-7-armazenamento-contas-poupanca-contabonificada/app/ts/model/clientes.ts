class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = [];
    }

    get clientes() {
        return this._clientes;
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string) {
        const indexProcurado = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
        this._clientes.splice(indexProcurado, 1);
    }

    listar() {
        return this._clientes;
    }

    pesquisar(cpf: string) {
        const indexProcurado = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
        return this._clientes[indexProcurado];
    }
}
