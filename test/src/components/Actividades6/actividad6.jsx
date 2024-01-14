

function Idol({nombre,precioPhoto,srcImagen,colorCard, setTotal, total}) {
    function comprar(e) {
        setTotal(precioPhoto+total);
        //ocultar el componente
        e.target.parentElement.parentElement.style.display = "none";
    }
  
    return (
    <>

        <div className={"card m-2 p-2 "+colorCard}>
        <img src={srcImagen} className={"card-img-top"} alt={nombre} />
        <div className="card-body text-center">
            <span className="badge rounded-pill bg-dark">{nombre}</span>
            <button type="button" className="btn btn-dark m-2" onClick={(e) => comprar(e)}>Comprar Photocard: {precioPhoto} $</button>
        </div>
        </div>
    </>
    );
}

Idol.defaultProps = {
    nombre: "NENE HIEDA",
    precioPhoto: "$ 1,000",
    srcImagen: "https://dialogue-music.jp/members/img/hieda_photo_15.jpg?5",
    colorCard: "bg-primary"
}

export default Idol;