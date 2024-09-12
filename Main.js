"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rede_1 = require("./Rede");
var readlineSync = require("readline-sync");
console.log("teste");
function main() {
    var redeSocial = new Rede_1.Rede(); // cria nova instância da classe Feed, 
    //que é responsável por gerenciar contas e posts na rede social.
    var contaLogada = null;
    var _loop_1 = function () {
        console.clear();
        console.log("\n         \u2584         \u2584  \u2584\u2584        \u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584         \u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2591\u258C      \u2590\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C\u2591\u258C     \u2590\u2591\u258C \u2580\u2580\u2580\u2580\u2588\u2591\u2588\u2580\u2580\u2580\u2580 \u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C \u2580\u2580\u2580\u2580\u2588\u2591\u2588\u2580\u2580\u2580\u2580 \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C\u2590\u2591\u258C    \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C \u2590\u2591\u258C   \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C\u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C  \u2590\u2591\u258C  \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C   \u2590\u2591\u258C \u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C\u2590\u2591\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C    \u2590\u2591\u258C\u2590\u2591\u258C     \u2590\u2591\u258C     \u2590\u2591\u258C          \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u258C\u2590\u2591\u258C     \u2590\u2591\u2590\u2591\u258C \u2584\u2584\u2584\u2584\u2588\u2591\u2588\u2584\u2584\u2584\u2584 \u2590\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n        \u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C      \u2590\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C\u2590\u2591\u258C       \u2590\u2591\u258C     \u2590\u2591\u258C     \n         \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580        \u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580         \u2580  \u2580         \u2580       \u2580      \n                                                                                                   ");
        if (contaLogada) {
            console.log("USERNAME: ".concat(contaLogada.getNomeUsuario(), ". ").concat(contaLogada.getSeguindo()));
        }
        console.log('[01] Criar conta\n[02] Login\n[03] Logout\n[04] Criar post\n[05] Buscar posts de um usuário\n[06] Seguir usuário\n[07] Enviar mensagem\n[08] Ver mensagens\n[09] Ver notificações\n[00] Sair');
        var escolha = readlineSync.question('Escolha opcao: ');
        switch (escolha) {
            case '01':
                contaLogada = redeSocial.criarConta();
                break;
            case '02':
                contaLogada = redeSocial.login();
                break;
            case '03':
                if (contaLogada) {
                    redeSocial.logout();
                    contaLogada = null;
                }
                else {
                    console.clear();
                    readlineSync.question("Você não está logado. Tecle ENTER para continuar...");
                }
            case '04':
                if (contaLogada) {
                    var conteudo = readlineSync.question('Conteudo do post: ');
                    contaLogada.criarPost(conteudo);
                    console.log('Post criado com sucesso!');
                }
                else {
                    console.log('Você precisa estar logado para criar um post.');
                }
                break;
            case '05':
                console.clear();
                if (contaLogada) {
                    var loopProcurarPosts = true;
                    while (loopProcurarPosts) {
                        console.log('PROCURAR POSTS DE UM USUÁRIO');
                        var opcaoProcurarPost = readlineSync.question("Digite o nome do usuário ou 00 para retornar: ");
                        var contaPuxada = redeSocial.puxaContaPeloNick(opcaoProcurarPost);
                        if ((opcaoProcurarPost != '00') && contaPuxada) {
                            console.clear();
                            var contadorDePosts = 1;
                            for (var _i = 0, _a = contaPuxada.getPosts(); _i < _a.length; _i++) {
                                var post = _a[_i];
                                console.log("*********************************************");
                                console.log("".concat(contadorDePosts, ") ").concat(contaPuxada.getNomeUsuario(), ": ").concat(post.getConteudo(), "\n                                            Curtidas: ").concat(post.getCurtidas().length));
                                for (var _b = 0, _c = post.comentarios; _b < _c.length; _b++) {
                                    var comentarioDoPost = _c[_b];
                                    console.log("".concat(comentarioDoPost[1], ": ").concat(comentarioDoPost[0]));
                                }
                                contadorDePosts++;
                            }
                            var menuPosts = true;
                            while (menuPosts) {
                                var opcaoMenuPosts = readlineSync.questionInt("Digite o numero do post que deseja interagir ou 00 para retornar: ");
                                if (opcaoMenuPosts <= contaPuxada.getPosts().length && opcaoMenuPosts != 0) {
                                    var opcaoInteracaoPost = readlineSync.questionInt("Digite 1 para curtir, 2 para comentar e 0 para voltar: ");
                                    switch (opcaoInteracaoPost) {
                                        case 1:
                                            console.clear();
                                            contaPuxada.getPosts()[opcaoInteracaoPost - 1].curtir(contaLogada, redeSocial);
                                            readlineSync.question("Post curtido. Tecle ENTER para continuar...");
                                            menuPosts = false;
                                            loopProcurarPosts = false;
                                            break;
                                        case 2:
                                            console.clear();
                                            var comentario = readlineSync.question("Digite o comentário: ");
                                            //console.log(contaPuxada.getPosts()[opcaoMenuPosts - 1].comentar(contaLogada, comentario))
                                            contaPuxada.getPosts()[opcaoMenuPosts - 1].comentar(contaLogada, comentario, redeSocial);
                                            readlineSync.question("Comentário postado. Tecle ENTER para continuar...");
                                            menuPosts = false;
                                            loopProcurarPosts = false;
                                            break;
                                        case 0:
                                            menuPosts = false;
                                            break;
                                        default:
                                            readlineSync.question("Opção inválida, tente novamente: ");
                                            break;
                                    }
                                }
                                else {
                                    menuPosts = false;
                                    loopProcurarPosts = false;
                                }
                            }
                        }
                        else if (opcaoProcurarPost === '00') {
                            loopProcurarPosts = false;
                        }
                        else {
                            readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...");
                            loopProcurarPosts = false;
                        }
                    }
                }
                else {
                    readlineSync.question('Você precisa estar logado para ver o feed. Tecle ENTER para continuar...');
                }
                break;
            case '06':
                if (contaLogada) {
                    var idParaSeguir_1 = readlineSync.questionInt('ID da conta para seguir: ');
                    var contaParaSeguir = redeSocial.contas.find(function (c) { return c.getId() === idParaSeguir_1; });
                    if (contaParaSeguir) {
                        contaLogada.seguir(contaParaSeguir);
                        console.log("Agora voc\u00EA est\u00E1 seguindo ".concat(contaParaSeguir.getNomeUsuario(), "."));
                    }
                    else {
                        console.log('Conta não encontrada.');
                    }
                }
                else {
                    console.log('Você precisa estar logado para seguir um usuário.');
                }
                break;
            case '07':
                if (contaLogada) {
                    var idDestino_1 = readlineSync.questionInt('ID da conta para enviar mensagem: ');
                    var contaDestino = redeSocial.contas.find(function (c) { return c.getId() === idDestino_1; });
                    if (contaDestino) {
                        var mensagem = readlineSync.question('Mensagem: ');
                        contaLogada.enviarMensagem(contaDestino, mensagem);
                        readlineSync.question("Mensagem enviada com sucesso. Tecle ENTER para continuar...");
                    }
                    else {
                        readlineSync.question("Conta não encontrada. Tecle ENTER para continuar...");
                    }
                }
                else {
                    readlineSync.question("Você precisa estar logado para isso. Tecle ENTER para continuar...");
                }
                break;
            case '08':
                if (contaLogada) {
                    contaLogada.exibirMensagens(redeSocial);
                }
                break;
            case '09':
                if (contaLogada) {
                    contaLogada.exibirNotificacoes();
                }
                break;
            case '00':
                console.log('Encerrando o simulador...');
                return { value: void 0 };
                //               case '00':
                //               if (contaLogada) {
                //                   redeSocial.logout()
                //                   contaLogada = null
                //               } else {
                //                   console.log('Você não está logado.')
                //              }
                break;
            default:
                console.log('Opção inválida.');
        }
    };
    // variável contaLogada é declarada. Ela é do tipo Conta ou null, 
    // o que significa que ela pode armazenar uma instância de Conta (quando um usuário está logado) 
    // ou null (quando nenhum usuário está logado).
    // Inicialmente, contaLogada é definida como null porque, no início do programa, nenhum usuário está logado.
    while (true) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
main();
