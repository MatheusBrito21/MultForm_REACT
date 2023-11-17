import React from 'react';
import { Card, Space ,Button} from 'antd';
// import "./CadFim.css";

export default props => (
  <div className='cardFim'>
    <Space direction="vertical">
    <Card title="Cadastro realizado"  style={{ width: 500 }}>
      <p>Em breve entraremos em contato!</p>
    
    <Button href='https://www.eprevbr.com.br/' target='_self' type="primary">Retornar ao site</Button>
   
    </Card>
  </Space>
  </div>
);  