import React from "react";
import './Etapas.css';

//icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";

export default ({currentStep}) =>{

    return(
        <div className="etapas">
            <div className="etapa ativa">
                <AiOutlineUser/>
                <p>Dados Pessoais</p>
            </div>
            <div className={`etapa ${currentStep>=1? "ativa":""}`}>
                <AiTwotonePhone/>
                <p>Contato</p>
            </div>
            <div className={`etapa ${currentStep>=2? "ativa":""}`}>
                <AiOutlineFundProjectionScreen/>
                <p>Trabalho</p>
            </div>
            <div className={`etapa ${currentStep>=3? "ativa":""}`}>
                <AiOutlineHome/>
                <p>Previdencia</p>
            </div>
        </div>
    )
}