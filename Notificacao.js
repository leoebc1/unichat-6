"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacao = void 0;
var Notificacao = /** @class */ (function () {
    function Notificacao(emissorNotificacao, conteudoNotificacao) {
        this.emissor = emissorNotificacao;
        this.conteudo = conteudoNotificacao;
    }
    Notificacao.prototype.getNomeEmissor = function () {
        return this.emissor.getNomeUsuario();
    };
    return Notificacao;
}());
exports.Notificacao = Notificacao;
