
const Reyes = (rey) => {
    let backgroundColor = ["text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-danger", "text-bg-warning", "text-bg-info", "text-bg-dark"];
    let random = Math.floor(Math.random() * backgroundColor.length);
    let color = backgroundColor[random];
    let eliminar = (e) => {
        //eliminar el componente
        console.log("Eliminando rey");
        e.target.parentElement.parentElement.remove();

    }
    return (
        <div className={"card m-2 " + color} style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={rey.src} className="card-img-top" alt="..."/>
                <h5 className="card-title">Rey {rey.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Comió {rey.vacasComidas} vacas</h6>
                <p className="card-text">Reinó {rey.reinado} años</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={(e) => eliminar(e)}>Eliminar</button>
            </div>
        </div>
    )
}

Reyes.defaultProps = {
    nombre: "Desconocido",
    reinado: 0,
    vacasComidas: 0
}

const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9,
        src:"https://html6.es/img/rey_atanagildo.png"
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3,
        src:"https://html6.es/img/rey_ervigio.png"
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16,
        src:"https://html6.es/img/rey_ataulfo.png"
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3,
        src:"https://html6.es/img/rey_leovigildo.png"
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13,
        src:"https://html6.es/img/rey_sisebuto.png"
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11,
        src:"https://html6.es/img/rey_recesvinto.png"
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12,
        src:"https://html6.es/img/rey_teodorico.png"
    }
  ]
export default Reyes;