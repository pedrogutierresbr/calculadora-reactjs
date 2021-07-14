function CalculadoraService() {
    const SOMA = "+";
    const SUBTRACAO = "-";
    const DIVISAO = "/";
    const MULTIPLICACAO = "*";

    function calcular(num1, num2, operacao) {
        let result;

        switch (operacao) {
            case SOMA:
                result = num1 + num2;
                break;

            case SUBTRACAO:
                result = num1 - num2;
                break;

            case DIVISAO:
                result = num1 / num2;
                break;

            case MULTIPLICACAO:
                result = num1 * num2;
                break;

            default:
                return 0;
        }

        return result;
    }

    function concatenarNumero(numAtual, numConcat) {
        //caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === "0" || numAtual === null) {
            numAtual = "";
        }
        //caso primeiro digito for '.', concatena '0' antes do ponto
        if (numConcat === "." && numAtual === "") {
            return "0.";
        }
        //caso '.' seja clicado e já contenha um ponto, apenas retornar
        if (numConcat === "." && numAtual.indexOf(".") > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO];
}

export default CalculadoraService;
