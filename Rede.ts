import { Conta } from "./Conta"
import { Post } from "./Post"
import * as readlineSync from 'readline-sync';

export class Rede {
    contas: Conta[] // lista de contas na rede social

    constructor() {
        this.contas = [] // inicia a lista de contas vazia
    }

    criarConta(): Conta {
        const nomeUsuario = readlineSync.question('Nome de usuario: ')
        const senha = readlineSync.question('Senha: ', { hideEchoBack: true })  //cria mascara na digitacao
        const informacaoAdicional = readlineSync.question('Informacao adicional: ')
        const novaConta = new Conta(nomeUsuario, senha, informacaoAdicional) // cria uma nova conta
        this.contas.push(novaConta) // adiciona a nova conta à lista de contas
        readlineSync.question(`Conta criada com sucesso! ID: ${novaConta.getId()}. Tecle ENTER para continuar...`)
        return novaConta // retorna a nova conta criada
    }

    login(): Conta | null {
        const nomeUsuario = readlineSync.question('Nome de usuario: ')
        const senha = readlineSync.question('Senha: ', { hideEchoBack: true })   // cria mascara na digitacao
        const conta = this.contas.find(c => c.getNomeUsuario() === nomeUsuario && c.senha === senha) 
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
            readlineSync.question("Login realizado com sucesso. Tecle ENTER para continuar...") 
        } else {
            readlineSync.question("Login falhou. Tecle ENTER para continuar...") 
        }
        return conta || null // retorna a conta se encontrada ou null se não encontrada
    }

    logout() {
        readlineSync.question("Logout realizado com sucesso. Tecle ENTER para continuar...") 
    }

    puxarPosts(conta: Conta): void{
        console.clear()
        let contadorDePosts = 1
            for(let post of conta.getPosts()){
                console.log(`*********************************************`)
                console.log(`${contadorDePosts}) ${conta.getNomeUsuario()}: ${post.getConteudo()}
                            Curtidas: ${post.getCurtidas().length}`)
                contadorDePosts++
            }
        let menuPosts = true
        while (menuPosts){
            let opcaoMenuPosts = readlineSync.question("Tecle ENTER para continuar...") 
        }
    }

    puxaContaPeloId(id:number) : Conta | string{
        for(let conta of this.contas){
            if(conta.getId() == id){
                return conta
            }
        }
        return "Esta conta nao existe"

    }

    puxaContaPeloNick(nick: string): Conta | null{
        for(let conta of this.contas){
            if(conta.getNomeUsuario() == nick){
                return conta
            }
        }
        return null
    }
}