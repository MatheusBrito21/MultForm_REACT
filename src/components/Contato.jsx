import React from "react";
import { Button, Checkbox, Form, Input, Select } from 'antd';
import InputMask from "react-input-mask"

export default ({dadosDoFormulario,handleChange})=>{
    const validateTelefone = (rule, value, callback) => {
        const telefoneRegex = /^\(\d{2}\)\s?9\d{4}-\d{4}$/;

        if (!telefoneRegex.test(value)) {
            callback("Por favor, insira um telefone válido.");
        } else {
            callback();
        }
    };
    return(
        <div>
         <Form.Item label="Email" name="emailCliente" rules={[
                    { required: true, message: 'Por favor, insira seu email!' },
                    { type: "email", message: 'Informe um email válido!' }
                ]}
                    >
                    <Input onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Telefone" name="telefoneCliente"
                    rules={[{ required: true, message: 'Por favor, insira seu Telefone!' },
                    {validator:validateTelefone}
                    ]}>
                    <InputMask className="inputMask" onChange={handleChange} mask={"(99)99999-9999"} maskChar={""} value={dadosDoFormulario.telefoneCliente} />
                </Form.Item>
    </div>
    )
}