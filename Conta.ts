import * as readlineSync from 'readline-sync';
import { Post } from './Post';
import { Rede } from './Rede';
import { Notificacao } from './Notificacao';

export class Conta {
    static idsUtilizados: number[] = [] // array estático para armazenar os IDs utilizados
    private id: number // ID único para cada conta
    private nomeUsuario: string // nome de usuário
    senha: string // senha para login
    informacaoAdicional: string // informações adicionais sobre o usuário
    seguidores: number[] // IDs das contas que seguem o usuário
    private seguindo: number[] // IDs das contas que o usuário atual segue
    private posts: Post[] // lista de posts feitos pelo usuário
    mensagensDiretas: [string, number, boolean][] // mensagens diretas recebidas, armazenando conteúdo e ID da conta remetente
    notificacoes: Array<Notificacao> // notificações recebidas, com conteúdo e ID da conta que gerou a notificação

    constructor(nomeUsuario: string, senha: string, informacaoAdicional: string) {
        this.id = Conta.idsUtilizados.length + 1 // gera um novo ID com base no tamanho do array de IDs utilizados
        Conta.idsUtilizados.push(this.id) // adiciona o ID ao array de IDs utilizados
        this.nomeUsuario = nomeUsuario // define o nome de usuário
        this.senha = senha // define a senha do usuário
        this.informacaoAdicional = informacaoAdicional // define informações adicionais
        this.seguidores = [] // inicia o array de seguidores vazio
        this.seguindo = [] // inicia o array de contas seguidas vazio
        this.posts = [] // inicia o array de posts vazio
        this.mensagensDiretas = [] // inicia o array de mensagens diretas vazio
        this.notificacoes = [] // inicia o array de notificações vazio
    }

    getId() : number{
        return this.id
    }

    getSeguindo(): Array<number>{
        return this.seguindo
    }

    getPosts(): Array<Post>{
        return this.posts
    }

    getNomeUsuario(): string{
        return this.nomeUsuario
    }

    seguir(conta: Conta) {
        if (!this.seguindo.includes(conta.id)) { // verifica se o usuário já está seguindo a conta
            this.seguindo.push(conta.id) // adiciona o ID da conta ao array de contas seguidas
            conta.seguidores.push(this.id) // adiciona o ID do usuário ao array de seguidores da conta seguida
            let notificacao = new Notificacao(this, `${this.getNomeUsuario()} agora segue você.`)
            conta.notificacoes.push(notificacao) // envia uma notificação à conta seguida
            readlineSync.question(`Você agora segue ${conta.getNomeUsuario()}. Tecle ENTER para continuar...`) 
        }
    }

    
    enviarMensagem(conta: Conta, conteudo: string) {
        let notificacao = new Notificacao(this, `${this.getNomeUsuario()} te enviou uma mensagem.`)
        conta.notificacoes.push(notificacao)
        conta.mensagensDiretas.push([conteudo, this.id, true]) // envia uma mensagem direta para a conta
    }

    criarPost(conteudo: string) {
        const novoPost = new Post(this.id, conteudo) // cria um novo post com o ID do autor e o conteúdo
        this.posts.push(novoPost) // adiciona o post à lista de posts do usuário
        readlineSync.question("Post realizado com sucesso. Tecle ENTER para continuar...") 
    }

    exibirMensagens(rede: Rede): void{
        console.clear()
        for(let mensagem of this.mensagensDiretas){
            let remetente: Conta | null | string = rede.puxaContaPeloId(mensagem[1])
            if(remetente instanceof Conta){
                if(!mensagem[2]){
                    console.log(`
*******************************
${remetente.getNomeUsuario()}: ${mensagem[0]}`)
                }   
            }
        }
        for(let mensagem of this.mensagensDiretas){
            let remetente: Conta | null | string= rede.puxaContaPeloId(mensagem[1])
            if(remetente instanceof Conta){
                if(mensagem[2]){
                    console.log(`
*******************************
${remetente.getNomeUsuario()}: ${mensagem[0]}`)
                    mensagem[2] = false
                }   
            }
        }
        readlineSync.question("Tecle ENTER para continuar...") 
    }


    exibirNotificacoes(): void{
        for(let notificacao of this.notificacoes){
            console.log(`${notificacao.conteudo}
            **********************************************`)
        }
        readlineSync.question('Tecle ENTER para continuar...')
    }
}







