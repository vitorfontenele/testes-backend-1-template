import { pratica2 } from "../src/pratica2";

describe("Teste do arquivo pratica2.ts", () => {
    test("A função recebe um parâmetro e retorna null caso seja diferente de number", () => {
        const result = pratica2("1" as any);

        expect(result).toBeNull();
    })
    test("A função recebe um número, se diferente de inteiro, retorna null", () => {
        const result = pratica2(1.4);

        expect(result).toBeNull();
    })
    test("Se o número for ímpar, retorne false", () => {
        const result = pratica2(3);

        expect(result).toBeFalsy();
    })
    test("Se o número for par, retorna true", () => {
        const result = pratica2(2);

        expect(result).toBeTruthy();
    })
})