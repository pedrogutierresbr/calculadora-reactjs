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

    return [calcular, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO];
}

export default CalculadoraService;
