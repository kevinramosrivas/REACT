import React, { useState , useRef} from 'react';

function Mensajes() {
    const [mensaje, setMensaje] = useState('');
    const [color, setColor] = useState('text-danger');
    const [contador, setContador] = useState(0);
    const reflexiones = [
        { nombre: 'Charles Swindoll', mensaje: 'La vida es 10% lo que me sucede y 90% cómo reacciono a ello.' },
        { nombre: 'Confucio', mensaje: 'Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida.' },
        { nombre: 'Albert Einstein', mensaje: 'La imaginación es más importante que el conocimiento.' },
        { nombre: 'Walt Disney', mensaje: 'La mejor forma de empezar es dejar de hablar y empezar a hacerlo.' },
        { nombre: 'Winston Churchill', mensaje: 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo.' },
        { nombre: 'Nelson Mandela', mensaje: 'Nunca pierdo. O gano o aprendo.' },
        { nombre: 'Mahatma Gandhi', mensaje: 'La grandeza de una nación y su progreso moral pueden ser juzgados por la forma en que se trata a sus animales.' },
        { nombre: 'Abraham Lincoln', mensaje: 'La mejor forma de predecir el futuro es creándolo.' },
        { nombre: 'Steve Jobs', mensaje: 'Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de otra persona.' },
        { nombre: 'Albert Einstein', mensaje: 'La vida es como una bicicleta. Para mantener el equilibrio debes seguir adelante.' },
    ]

    const colorAleatorio = () => {
        const colores = ['text-danger', 'text-success', 'text-warning', 'text-primary', 'text-info'];
        const colorAleatorio = Math.floor(Math.random() * colores.length);
        setColor(colores[colorAleatorio]);
    }
    

    const cambiarMensaje = () => {
        //hacer que el mensaje cambie cada vez que se presione el botón empieze por el primero y termine en el último, una vez que llegue al último vuelva a empezar.\
        setContador(contador + 1);
        if (contador >= reflexiones.length-1) {
            setContador(0);
        }
        setMensaje(reflexiones[contador]);
        colorAleatorio();
    }

    return (
        <div>
            
            <div className="container">
                <div className="row m-2 text-center">
                    <div className="col-md-12">
                        <button onClick={cambiarMensaje} className='btn btn-primary'>Cambiar mensaje</button>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">El autor <span className={color} >{mensaje.nombre}</span> solía decir:</h5>
                                <span className="card-text">"{mensaje.mensaje}"</span>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Mensajes;