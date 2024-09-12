import { Conta } from "./Conta"
import { Rede } from "./Rede";
import { Post } from "./Post"
import * as readlineSync from 'readline-sync';

console.log("teste")
function main() {
    const redeSocial = new Rede()  // cria nova instância da classe Feed, 
                                   //que é responsável por gerenciar contas e posts na rede social.
    let contaLogada: Conta | null = null
                                  // variável contaLogada é declarada. Ela é do tipo Conta ou null, 
                                  // o que significa que ela pode armazenar uma instância de Conta (quando um usuário está logado) 
                                  // ou null (quando nenhum usuário está logado).
                                  // Inicialmente, contaLogada é definida como null porque, no início do programa, nenhum usuário está logado.


    while (true) {
        console.clear()
        console.log(`
         ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
        ▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
        ▐░▌       ▐░▌▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ 
        ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌     ▐░▌     ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌     ▐░▌     ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     
        ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
        ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
         ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀       ▀      
                                                                                                   `)
        if(contaLogada){
            console.log(`USERNAME: ${contaLogada.getNomeUsuario()}. ${contaLogada.getSeguindo()}`)
        }
        console.log('[01] Criar conta\n[02] Login\n[03] Logout\n[04] Criar post\n[05] Buscar posts de um usuário\n[06] Seguir usuário\n[07] Enviar mensagem\n[08] Ver mensagens\n[09] Ver notificações\n[00] Sair')
        const escolha = readlineSync.question('Escolha opcao: ')

        switch (escolha) {
            case '01': //criar conta
                contaLogada = redeSocial.criarConta()
                break
            case '02': //login
                contaLogada = redeSocial.login()
                break

            case '03': //logout
                    if (contaLogada) {
                        redeSocial.logout()
                        contaLogada = null
                    } else {
                        console.clear()
                        readlineSync.question("Você não está logado. Tecle ENTER para continuar...") 
                    }

            case '04': //criar post
                if (contaLogada) {
                    const conteudo = readlineSync.question('Conteudo do post: ')
                    contaLogada.criarPost(conteudo)
                    console.log('Post criado com sucesso!')
                } else {
                    console.clear()
                    readlineSync.question("Você não está logado. Tecle ENTER para continuar...")
                }
                break

            case '05': //buscar posts de um usuário através do seu nickname
                console.clear()
                if (contaLogada) {
                    let loopProcurarPosts = true
                    while(loopProcurarPosts){ //loop da interface de buscar usuário
                        console.log('PROCURAR POSTS DE UM USUÁRIO')
                        let opcaoProcurarPost = readlineSync.question("Digite o nome do usuário ou 00 para retornar: ")
                        let contaPuxada = redeSocial.puxaContaPeloNick(opcaoProcurarPost)
                        if((opcaoProcurarPost != '00') && contaPuxada){
                            console.clear()
                            let contadorDePosts = 1 //variavel que se auto-incrementa para enumerar os posts mostrados
                            for(let post of contaPuxada.getPosts()){  //loop para listar os posts do usuario
                                console.log(`*********************************************`)
                                console.log(`${contadorDePosts}) ${contaPuxada.getNomeUsuario()}: ${post.getConteudo()}
                                            Curtidas: ${post.getCurtidas().length}`) 
                                for(let comentarioDoPost of post.comentarios){   //loop para listar os comentários de cada post
                                    console.log(`${comentarioDoPost[1]}: ${comentarioDoPost[0]}`)
                                }
                                contadorDePosts++
                            }
                            let menuPosts = true
                            while (menuPosts){ //loop para interface de selecionar post para interagir
                                let opcaoMenuPosts = readlineSync.questionInt("Digite o numero do post que deseja interagir ou 00 para retornar: ")
                                if(opcaoMenuPosts <= contaPuxada.getPosts().length && opcaoMenuPosts != 0){
                                    let opcaoInteracaoPost = readlineSync.questionInt("Digite 1 para curtir, 2 para comentar e 0 para voltar: ")
                                    switch (opcaoInteracaoPost){
                                        case 1: //curtir post selecionado
                                            console.clear()
                                            contaPuxada.getPosts()[opcaoInteracaoPost - 1].curtir(contaLogada, redeSocial)
                                            readlineSync.question("Post curtido. Tecle ENTER para continuar...")
                                            menuPosts = false 
                                            loopProcurarPosts = false
                                        break;
                                        case 2: //comentar no post selecionado
                                            console.clear()
                                            let comentario = readlineSync.question("Digite o comentário: ")
                                            contaPuxada.getPosts()[opcaoMenuPosts - 1].comentar(contaLogada, comentario, redeSocial)
                                            readlineSync.question("Comentário postado. Tecle ENTER para continuar...")
                                            menuPosts = false
                                            loopProcurarPosts = false
                                        break;
                                        case 0:
                                            menuPosts = false
                                        break;
                                        default:
                                            readlineSync.question("Opção inválida, tecle Enter para retornar... ")
                                        break;
                                    }
                                } else {
                                    menuPosts = false 
                                    loopProcurarPosts = false
                                }
                            }
                        } else if (opcaoProcurarPost === '00') {
                            loopProcurarPosts = false
                        } else {
                            readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...")
                            loopProcurarPosts = false
                        }
                    }
                } else {
                    console.clear()
                    readlineSync.question('Você precisa estar logado para ver o feed. Tecle ENTER para continuar...')
                }
                break

            case '06': // buscar conta pelo ID para seguir
                if (contaLogada) {
                    const idParaSeguir = readlineSync.questionInt('ID da conta para seguir: ')
                    const contaParaSeguir = redeSocial.contas.find(c => c.getId() === idParaSeguir)
                    if (contaParaSeguir) {
                        contaLogada.seguir(contaParaSeguir)
                        console.log(`Agora você está seguindo ${contaParaSeguir.getNomeUsuario()}.`)
                    } else {
                        console.log('Conta não encontrada.')
                    }
                } else {
                    console.clear()
                    readlineSync.question("Você não está logado. Tecle ENTER para continuar...")
                }
                break

            case '07': //enviar mensagem privada atraves do id do destinatário
                if (contaLogada) {
                    const idDestino = readlineSync.questionInt('ID da conta para enviar mensagem: ')
                    const contaDestino = redeSocial.contas.find(c => c.getId() === idDestino)
                    if (contaDestino) {
                        const mensagem = readlineSync.question('Mensagem: ')
                        contaLogada.enviarMensagem(contaDestino, mensagem)
                        readlineSync.question("Mensagem enviada com sucesso. Tecle ENTER para continuar...") 
                    } else {
                        readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...") 
                    }
                } else {
                    console.clear()
                    readlineSync.question("Você precisa estar logado para isso. Tecle ENTER para continuar...") 
                }
                break
                case '08': //exibir mensagens recebidas
                    if(contaLogada){
                        contaLogada.exibirMensagens(redeSocial)
                    }
                break;
                case '09': //exibir notificações
                    if(contaLogada){
                        contaLogada.exibirNotificacoes()
                    }else {
                        console.clear()
                        readlineSync.question("Você não está logado. Tecle ENTER para continuar...")
                    }
                break;
                case '00': //encerrar o programa
                    console.log('Encerrando o simulador...')
                    return
                break
                default:
                    console.clear()
                readlineSync.question('Opção inválida, tecle ENTER para continuar...')
                break
        }
    }
}

main()