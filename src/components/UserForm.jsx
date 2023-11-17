import React from "react";
import { Button, Checkbox, Form, Input, Select } from 'antd';
import InputMask from "react-input-mask"
import '../App.css';

const { Option } = Select;


export default ({dadosDoFormulario,handleChange}) => {

    const validateCPF = (rule, value, callback) => {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

        if (!cpfRegex.test(value)) {
            callback("Por favor, insira um CPF válido.");
        } else {
            callback();
        }
    };
    return (
        <div>
            <Form.Item label="Nome" name="nomeCompleto"
                rules={[
                    { required: true, message: 'Por favor, insira seu nome completo!' },
                    { whitespace: true },
                    { min: 3 }
                ]}
            >
                <Input onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="CPF" name="cpfCliente"
                rules={[
                    { required: true, message: 'Por favor, insira seu CPF!' },
                    { validator: validateCPF }

                ]}
            >
                <InputMask className="inputMask" onChange={handleChange} mask={"999.999.999-99"} maskChar={""} value={dadosDoFormulario.cpfCliente} />

            </Form.Item>
            <Form.Item label="Sexo" name="sexoEscolhido" rules={[{ required: true, message: 'Por favor, selecione o Sexo!' }]}>
                <Select
                    allowClear
                >
                    <Option onChange={handleChange} value="Masculino">Masculino</Option>
                    <Option onChange={handleChange} value="Feminino">Feminino</Option>
                </Select>
            </Form.Item>
        </div>
    )
}



