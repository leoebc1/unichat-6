"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rede = void 0;
var Conta_1 = require("./Conta");
var readlineSync = require("readline-sync");
var Rede = /** @class */ (function () {
    function Rede() {
        this.contas = []; // inicia a lista de contas vazia
    }
    Rede.prototype.criarConta = function () {
        var nomeUsuario = readlineSync.question('Nome de usuario: ');
        var senha = readlineSync.question('Senha: ', { hideEchoBack: true }); //cria mascara na digitacao
        var informacaoAdicional = readlineSync.question('Informacao adicional: ');
        var novaConta = new Conta_1.Conta(nomeUsuario, senha, informacaoAdicional); // cria uma nova conta
        this.contas.push(novaConta); // adiciona a nova conta à lista de contas
        readlineSync.question("Conta criada com sucesso! ID: ".concat(novaConta.getId(), ". Tecle ENTER para continuar..."));
        return novaConta; // retorna a nova conta criada
    };
    Rede.prototype.login = function () {
        var nomeUsuario = readlineSync.question('Nome de usuario: ');
        var senha = readlineSync.question('Senha: ', { hideEchoBack: true }); // cria mascara na digitacao
        var conta = this.contas.find(function (c) { return c.getNomeUsuario() === nomeUsuario && c.senha === senha; });
        // Esta é uma função callback que define a condição usada pelo .find().
        // A função recebe um parâmetro c, que representa uma conta (Conta) individual do array contas.
        // busca uma conta com o nome de usuário e senha fornecidos
        // A condição c.nomeUsuario === nomeUsuario && c.senha === senha verifica se:
        //(nomeUsuario) da conta c é igual ao nome de usuário fornecido como entrada (nomeUsuario)
        //se a (senha) da conta c é igual senha fornecida como entrada (senha).
        // O resultado da busca (a conta que satisfaz a condição) é armazenado na variável conta.
        // Se uma conta correspondente for encontrada, conta será uma instância da classe Conta 
        // que representa o usuário que está tentando fazer login.
        // caso contrario conta será undefined
        if (conta) {
            readlineSync.question("Login realizado com sucesso. Tecle ENTER para continuar...");
        }
        else {
            readlineSync.question("Login falhou. Tecle ENTER para continuar...");
        }
        return conta || null; // retorna a conta se encontrada ou null se não encontrada
    };
    Rede.prototype.logout = function () {
        readlineSync.question("Logout realizado com sucesso. Tecle ENTER para continuar...");
    };
    /*
    filtrarPosts(conta: Conta): Post[] {
        return this.contas
            .filter(c => conta.seguindo.includes(c.id)) // filtra as contas seguidas pelo usuário
            .flatMap(c => c.posts) // retorna os posts das contas seguidas
         }
    */
    Rede.prototype.puxarPosts = function (conta) {
        console.clear();
        var contadorDePosts = 1;
        for (var _i = 0, _a = conta.getPosts(); _i < _a.length; _i++) {
            var post = _a[_i];
            console.log("*********************************************");
            console.log("".concat(contadorDePosts, ") ").concat(conta.getNomeUsuario(), ": ").concat(post.getConteudo(), "\n                            Curtidas: ").concat(post.getCurtidas().length));
            contadorDePosts++;
        }
        var menuPosts = true;
        while (menuPosts) {
            var opcaoMenuPosts = readlineSync.question("Tecle ENTER para continuar...");
        }
    };
    Rede.prototype.puxaContaPeloId = function (id) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.getId() == id) {
                return conta;
            }
        }
        return "Esta conta nao existe";
    };
    Rede.prototype.puxaContaPeloNick = function (nick) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.getNomeUsuario() == nick) {
                return conta;
            }
        }
        return null;
    };
    return Rede;
}());
exports.Rede = Rede;
