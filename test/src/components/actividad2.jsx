//importar useRef
import { useRef } from 'react';
import { useEffect , useState } from 'react';

function Actividad2() {
    let nombres = ["NENE HIEDA","SATSUKI MIYAHARA","YURINA UCHIYAMA"];
    let imagenes = {
        "hieda":"https://dialogue-music.jp/members/img/hieda_photo_15.jpg?5",
        "miyahara":"https://dialogue-music.jp/members/img/miyahara_photo_15.jpg?5",
        "uchiyama":"https://dialogue-music.jp/members/img/uchiyama_photo_15.jpg?5"
    }
    
    function cambiarImagen(e,numero){
        //ver si el src contiene la palabra dialogue
        let src = e.target.src;
        if(src.includes("dialogue")){
            //cambiar por la imagen de la carta
            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/6970/6970416.png";
            e.currentTarget.parentElement.children[1].textContent = "?";

        }
        //cambiar por su imagen original
        else{
            e.currentTarget.src = imagenes[e.target.alt];
            e.currentTarget.parentElement.children[1].textContent = nombres[numero];
        }
        
    }
    function cambiarTexto(e,numero){
        //ver si el texto contiene la palabra dialogue
        let texto = e.target.textContent;
        if(texto.includes("VISTO")){
            //cambiar el color del texto
            e.currentTarget.classList.remove("text-bg-secondary");
            e.currentTarget.classList.add("text-bg-primary");
            //cambiar por el nombre original
            e.target.textContent = nombres[numero];
        }
        else{
            //cambiar el color del texto
            e.currentTarget.classList.add("text-bg-secondary");
            e.currentTarget.classList.remove("text-bg-primary");
            //cambiar por visto
            e.target.textContent = "VISTO";
        }
    }

  return (
    <>
        <div className={"container-fluid"}>
          <div className={"row d-flex justify-content-center"}>
            <div className={"col-4 background-img m-1 p-2 rounded container"}>
                <div className={"row d-flex justify-content-center"}>
                    <img src={"https://dialogue-music.jp/members/img/hieda_photo_15.jpg?5"} alt={"hieda"} className={"col-12 img-fluid rounded-pill"} onClick={e => cambiarImagen(e,0)} />
                    <span className={"col-6 text-center badge text-bg-primary p-1 m-3"} onClick={e => cambiarTexto(e,0)}>{nombres[0]}</span>
                </div>
            </div>
            <div className={"col-4 background-img m-1 p-2 rounded container"}>
                <div className={"row d-flex justify-content-center"}>
                    <img src={"https://dialogue-music.jp/members/img/miyahara_photo_15.jpg?5"} alt={"miyahara"} className={"col-12 img-fluid  rounded-pill"} onClick={e => cambiarImagen(e,1)} />
                    <span className={"col-6 text-center badge text-bg-primary p-1 m-3"} onClick={e => cambiarTexto(e,1)}>{nombres[1]}</span>
                </div>
            </div>
            <div className={"col-4 background-img m-1 p-2 rounded container"}>
                <div className={"row d-flex justify-content-center"}>
                    <img src={"https://dialogue-music.jp/members/img/uchiyama_photo_15.jpg?5"} alt={"uchiyama"} className={"col-12 img-fluid rounded-pill"} onClick={e => cambiarImagen(e,2)} />
                    <span className={"col-6 text-center badge text-bg-primary p-1 m-3"} onClick={e => cambiarTexto(e,2)}>{nombres[2]}</span>
                </div>
            </div> 
          </div>
        </div>
    </>
  );
}

export default Actividad2;