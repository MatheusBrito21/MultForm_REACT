import React from "react";
import { Form,Select, Input } from 'antd';
const { Option } = Select;

export default ({ dadosDoFormulario, handleChange }) => {
    return (
        <div>
            <Form.Item label="Possui doença crônica?" name="decisaoDoenca" rules={[{ required: true, message: 'Por favor, informe Sim ou Não' }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="sim">Sim</Option>
                    <Option value="nao">Não</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Qual?" name="descricaoDoenca" rules={[{required: false}]}>
                <Input placeholder= "Descreva a doença."/>
            </Form.Item>
            <Form.Item label="Possui Cadastro no e-gov?" name="cadastroEgov" rules={[{ required: true, message: 'Por favor, informe Sim ou Não' }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option onChange = {handleChange} value="sim">Sim</Option>
                    <Option onChange = {handleChange}  value="nao">Não</Option>
                </Select>
            </Form.Item>
        </div>
    )
}