import React from 'react';
import '../App.css';

export const Etapa1 = () => {
    return (
    <div className="centralizar">
        <h1>Dados Gerais</h1>
        <h3>1. Qual o seu nome?</h3>
        <input></input>
        <h3>2. Qual a sua idade?</h3>
        <input></input>
        <h3>3. Qual o seu email?</h3>
        <input></input>
        <h3>4. Qual a sua esolaridade?</h3>
        <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
        
    </div>
    )
}

export default Etapa1;