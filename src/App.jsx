import './App.css';
import { Form, Button } from 'antd';
import UserForm from './components/UserForm';
import Trabalho from './components/Trabalho';
import Contato from './components/Contato';
import Previdencia from './components/Previdencia';
import CadFim from './components/CadFim';
import { useState } from 'react';
import Etapas from './components/Etapas';


//Hooks
import { useForm } from './hooks/useForm';

//Estado inicial form
const estadoInicial = {
    // aceiteTermo: "",
    nomeCompleto: "",
    cpfCliente: null,
    estadoCivilCliente: "",
    diaNascimento: "",
    mesNascimento: "",
    anoNascimento: "",
    sexoEscolhido: "",
    emailCliente: "",
    telefoneCliente: null,
    registroCarteira: 0,
    anosRegistro: 0,
    atualProfissao: "",
    rendaAtualCliente: 0,
    previdenciaAutonomo: "",
    anosAutonomo: 0,
    descricaoDoenca:"",
    decisaoDoenca: "",
    cadastroEgov: "",

}

export default () => {

    const [dadosDoFormulario, setDadosDoFormulario] = useState(estadoInicial)
    const [form] = Form.useForm();
    const [isFinalizado, setIsFinalizado] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setDadosDoFormulario({ ...dadosDoFormulario, [name]: value })
    }

    const formComponents = [
        <UserForm dadosDoFormulario={dadosDoFormulario} handleChange={handleChange} />,
        <Contato dadosDoFormulario={dadosDoFormulario} handleChange={handleChange} />,
        <Trabalho dadosDoFormulario={dadosDoFormulario} handleChange={handleChange} />,
        <Previdencia dadosDoFormulario={dadosDoFormulario} handleChange={handleChange} />]

    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

    const onFinish = (e) => {
        const novosDados = form.getFieldValue();
        setDadosDoFormulario(novosDados)

        // axios.post('https://crm.eprevbr.com.br/api.php', JSON.stringify(novosDados))
        //     .then(response => {
        //         console.log('Resposta da API:', response.data);
        //         // Faça algo com a resposta da API, se necessário
        //     })
        //     .catch(error => {
        //         console.error('Erro ao fazer a requisição:', error);
        //         // Lide com erros de requisição, se necessário
        //     });

        setIsFinalizado(true)
        console.log(novosDados)
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Falha na validação:", errorInfo);
      };

    return (
        <div className="App">
            <div className="header">
                <h1>Cadastro</h1>
                <p>Por favor insira seus dados:</p>
            </div>
            <div className="form-container">
                <Etapas currentStep={currentStep}/>
                {!isFinalizado? 
                <Form className='formulario' form={form} autoComplete='off' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <div className="inputs-container">
                        {currentComponent}
                    </div>
                    <div className="actions">
                        {!isFirstStep ?
                            <Button onClick={() => changeStep(currentStep - 1)}>
                                {/* colocar icone */}
                                <span>Voltar</span>
                            </Button> :''
                        }

                        <Button onClick={(e) => { isLastStep ? onFinish(e) : changeStep(currentStep + 1, e) }} >
                            {/* colocar icone */}
                            {isLastStep ? <span>Enviar</span> : <span>Avançar</span>}
                        </Button>
                    </div>
                </Form>                
                    : 
                <CadFim></CadFim>
                }

            </div>
        </div>
    )
}



