import { Conta } from "./Conta";

export class Notificacao {
    emissor: Conta
    conteudo: string

    constructor(emissorNotificacao: Conta, conteudoNotificacao: string){
        this.emissor = emissorNotificacao
        this.conteudo = conteudoNotificacao
    }

    getNomeEmissor(): string{
        return this.emissor.getNomeUsuario()
    }
}