"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Notificacao_1 = require("./Notificacao");
var Post = /** @class */ (function () {
    function Post(idAutor, conteudo) {
        this.idPost = Post.idPostGlobal++; // gera um ID único para o post
        this.conteudo = conteudo;
        this.idAutor = idAutor; // define o autor do post
        var dataAtual = new Date(); // obtém a data atual
        this.dataHora = [dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()]; // armazena a data no formato [dia, mês, ano]
        this.curtidas = []; // inicia o array de curtidas vazio
        this.comentarios = []; // inicia o array de comentários vazio
    }
    Post.prototype.curtir = function (conta, redeSocial) {
        if (!this.curtidas.includes(conta.getNomeUsuario())) { // verifica se a conta já curtiu o post
            this.curtidas.push(conta.getNomeUsuario()); // adiciona o nick da conta ao array de curtidas
            var notificacao = new Notificacao_1.Notificacao(conta, "".concat(conta.getNomeUsuario(), " curtiu seu post."));
            for (var _i = 0, _a = redeSocial.contas; _i < _a.length; _i++) {
                var conta_1 = _a[_i];
                if (conta_1.getId() == this.idAutor) {
                    conta_1.notificacoes.push(notificacao);
                }
            }
        }
    };
    Post.prototype.comentar = function (conta, comentario, redeSocial) {
        this.comentarios.push([comentario, conta.getNomeUsuario()]); // adiciona um comentário ao post 
        //com o conteúdo e o nome do usuário
        this.curtidas.push(conta.getNomeUsuario());
        var notificacao = new Notificacao_1.Notificacao(conta, "".concat(conta.getNomeUsuario(), " comentou no seu post."));
        for (var _i = 0, _a = redeSocial.contas; _i < _a.length; _i++) {
            var conta_2 = _a[_i];
            if (conta_2.getId() == this.idAutor) {
                conta_2.notificacoes.push(notificacao);
            }
        }
    };
    //notificarComentario(contaQuePostou: Conta, contaQueComentou: Conta): void{
    //  contaQuePostou.notificacoes.push(`${contaQueComentou.getNomeUsuario()} comentou no seu post`)
    //}
    Post.prototype.getConteudo = function () {
        return this.conteudo;
    };
    Post.prototype.getCurtidas = function () {
        return this.curtidas;
    };
    Post.idPostGlobal = 0; // contador estático para gerar IDs únicos para os posts
    return Post;
}());
exports.Post = Post;
