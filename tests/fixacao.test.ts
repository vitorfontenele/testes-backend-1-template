import { fixacao } from "../src/fixacao";

describe("Teste do arquivo fixacao", () => {
    test("Entrada é uma string e retorna array com cada letra", () => {
        const result = fixacao("bananinha");
        const expectedResult = ["b", "a", "n", "a", "n", "i", "n", "h", "a"];

        expect(result).toEqual(expectedResult);
    })
})