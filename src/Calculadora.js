import React, { useState } from "react";
import "./Calculadora.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./components/Calculadora.service";

function Calculadora() {
    // eslint-disable-next-line no-unused-vars
    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

    const [txtNumeros, setTxtNumeros] = useState("0"); //estado do campo de texto
    const [numero1, setNumero1] = useState("0"); //estado do primeiro numero digitado
    const [numero2, setNumero2] = useState(null); //estado do segundo numero digitado
    const [operacao, setOperacao] = useState(null); //estado da operacao digitada

    function adicionarNumero(numero) {
        let resultado;
        if (operacao === null) {
            resultado = concatenarNumero(numero1, numero);
            setNumero1(resultado);
        } else {
            resultado = concatenarNumero(numero2, numero);
            setNumero2(resultado);
        }
        setTxtNumeros(resultado);
    }

    function definirOperacao(op) {
        //apenas define operacao caso nao exista
        if (operacao === null) {
            setOperacao(op);
            setTxtNumeros(op);
            return;
        }
        //caso operacao estiver definida e numero 2 selecionado, realiza o calculo da operacao previa
        if (operacao !== null) {
            const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
            setOperacao(op);
            setNumero1(resultado.toString());
            setNumero2(null);
            setTxtNumeros(resultado.toString());
        }
    }

    function acaoCalcular() {
        if (numero2 === null) {
            return;
        }
        const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
        setTxtNumeros(resultado.toString());
    }

    function limpar() {
        setTxtNumeros("0");
        setNumero1("0");
        setNumero2(null);
        setOperacao(null);
    }

    return (
        <Jumbotron
            style={{
                background: "transparent !important",
                backgroundColor: "#4c4c4c",
                padding: "5px",
                margin: "150px auto",
                width: "400px",
                borderRadius: "8px",
            }}
        >
            <Container>
                <Row>
                    <Col xs="3">
                        <Button variant="danger" onClick={limpar}>
                            C
                        </Button>
                    </Col>

                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="txtNumeros"
                            className="text-end"
                            readOnly="readonly"
                            value={txtNumeros}
                            data-testid="txtNumeros"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("7")}>
                            7
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("8")}>
                            8
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("9")}>
                            9
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={() => definirOperacao(DIVISAO)}>
                            /
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("4")}>
                            4
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("5")}>
                            5
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("6")}>
                            6
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={() => definirOperacao(MULTIPLICACAO)}>
                            *
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("1")}>
                            1
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("2")}>
                            2
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("3")}>
                            3
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={() => definirOperacao(SUBTRACAO)}>
                            -
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero("0")}>
                            0
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={() => adicionarNumero(".")}>
                            .
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="success" onClick={acaoCalcular}>
                            =
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={() => definirOperacao(SOMA)}>
                            +
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Calculadora;
