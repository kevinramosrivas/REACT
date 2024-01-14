//importar useRef
import { useRef } from 'react';
import { useEffect , useState } from 'react';

function Actividad1() {
    const myRef = useRef();
    const count = useRef(0);
    //useState
    const [imagenActual, setImagenActual] = useState(null);
    //useEffect
    useEffect(() => {
      //obtener el valor del localstorage
      let imagen = localStorage.getItem("imagen");
      //si existe el valor
      if(imagen){
        //cambiar la imagen
        myRef.current.src = imagen;
      }
    }, []);
    function cambiarImagen(e){
      let urls = {
        hieda: "https://dialogue-music.jp/members/img/hieda_photo_15.jpg?5",
        satsuki: "https://dialogue-music.jp/members/img/miyahara_photo_15.jpg?5",
        yurina: "https://dialogue-music.jp/members/img/uchiyama_photo_15.jpg?5"
      }
      //obtener la imagen del dom
      let src  = myRef.current.src;
      //intercambiar la imagen por las otras
      if(src === urls.hieda){
        myRef.current.src = urls.satsuki;
        localStorage.setItem("imagen", urls.satsuki);
      }
      else if(src === urls.satsuki){
        myRef.current.src = urls.yurina;
        localStorage.setItem("imagen", urls.yurina);
      }
      else{
        myRef.current.src = urls.hieda;
        localStorage.setItem("imagen", urls.hieda);
      }
  
    }
  
    function contador(e){
      let valor = e.target.value;
      let numero = valor.length;
      count.current.innerHTML = numero;
    }
  
    return (
        <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <img src={"https://dialogue-music.jp/members/img/hieda_photo_15.jpg?5"} alt={"pikachu"} className={"img-fluid front"} ref={myRef} />
            </div> {/* Agregar etiqueta de cierre para el div */}
            <div className={"col-12"}>
              <h1>Cambiador de imagenes</h1>
              <button className={"btn btn-primary"} onClick={cambiarImagen}>Cambiar imagen</button>
            </div>
            <div className={"col-6 pt-4"}>
              <input type={"text"} className={"form-control"} onChange={contador} />
            </div>
            <div className={"col-6"}>
              <p className={"text-muted"}>El numero de caracteres es: <span className={"badge bg-primary"} ref={count}>0</span></p>
            </div>
          </div>
        </div>
    )
}

export default Actividad1