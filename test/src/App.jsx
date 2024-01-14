//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importar js de bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
//import Actividad1 from './components/actividad1';
import ReyesGodos from './components/actividad10';
import ColorInput from './components/ColorInputactividad10';

import { ContextProvider} from './context/Context';







function App() {
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

  return (
    <ContextProvider >
      <div className="container">
        <div className="row m-4 d-flex justify-content-center align-items-center text-center">
          <div className="col-12">
            <h1>Actividad 10</h1>
            <p>Selecciona un color para los componentes</p>
            <ColorInput/>
          </div>
        </div>
        <div className="row m-4 card-columns">
          <div className="card-columns">
            
                {reyes.map((rey, index) => {
                  return (
                      <ReyesGodos nombre={rey.nombre} titulo={rey.reinado} descripcion={rey.vacasComidas} imagen={rey.src} index={rey.nombre} key={index}/>
                  )
                })}
            
          </div>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
