import { pratica3 } from "../src/pratica3";

describe("Teste do arquivo pratica3", () => {
    test("Propriedades mult e soma devem retornar valores adequados", () => {
        const result = pratica3(2, 3);
        const expectedResult = {
            soma: 5,
            mult: 6
        }

        expect(result).toEqual(expectedResult);
    })
})