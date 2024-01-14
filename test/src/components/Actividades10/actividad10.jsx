import { Contexto } from "../../context/Context";
import { useContext } from "react";

const ReyesGodos = (props) => {
    let {cssColor} = useContext(Contexto);
    return (
        <div className="card p-3 m-2 text-center" style={{backgroundColor:cssColor}}>
            <p className="card-header bg-light">{props.nombre}</p>
            <img src={props.imagen} className="card-img-top m-3 bg-light rounded-circle mx-auto" alt={props.nombre} />
            <div className="card-body bg-light">
                <h5 className="card-title d-flex justify-content-center align-items-center"> El color usado es {cssColor} <div style={{width:"20px", height:"20px", backgroundColor:cssColor}}></div></h5>
                <p className="card-text">Este es el componente #{props.index} y se llama {props.nombre} y su reinado fue de {props.titulo} años y se comió {props.descripcion} vacas</p>
            </div>
        </div>
    )
}

ReyesGodos.defaultProps = {
    cssColor: "#e66465"
}


export default ReyesGodos;