export interface OperacaoAritmetica {
    soma: number
    mult: number
}

export const pratica3 = (n1: number, n2: number) : OperacaoAritmetica => {
    return {
        soma: n1 + n2,
        mult: n1*n2
    }
}