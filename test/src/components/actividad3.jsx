import React, { useState } from 'react';

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const sumar = () => {
        setResultado(num1 + num2);
    };

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={sumar}>Sumar</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
}

export default Calculadora;
