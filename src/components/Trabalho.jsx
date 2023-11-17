import React from "react";
import { Button, Checkbox, Form, Input, Select, InputNumber } from 'antd';
import InputMask from "react-input-mask"

const { Option } = Select;

export default ({dadosDoFormulario,handleChange}) =>{
    return(
        <div>
         <Form.Item label="Possui Carteira de Trabalho?" name="registroCarteira" rules={[{ required: true, message: 'Por favor, informe sim ou não!' }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Option value="sim">Sim</Option>
                        <Option value="nao">Não</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Anos em Carteira" name="anosRegistro" rules={[{required:false, message: 'Informe um valor em anos!' }]}>
                    <InputNumber min={0} defaultValue={0} />
                </Form.Item>
                <Form.Item label="Profissão Atual" name="atualProfissao" rules={[{ required: true, message: 'Por favor, insira sua Profissão atual!' }]}>
                    <Input onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Renda Atual" name="rendaAtualCliente" rules={[{ required: true, message: 'Informe sua renda atual!' }]}>
                    <Input placeholder="R$" onChange={handleChange} />
                </Form.Item>
    </div>
    )
}