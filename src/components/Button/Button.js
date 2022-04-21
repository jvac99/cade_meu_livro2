import React from 'react';
import './Button.css';

const Button = (props) => {

    const { tipo, valor, click, enviar, change } = props;

    return (
        <button className='button' type={tipo} onClick={click} onSubmit={enviar} onChange={change}>
            {valor}
        </button>
    );
}

export default Button;