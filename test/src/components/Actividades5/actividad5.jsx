import React, { useState , useRef} from 'react';

const ConversorMonedas= () =>{
    const [monedas, setMonedas] = useState({
        soles: 0,
        dolares: 0,
        euros: 0,
        yenes: 0,
        libras: 0,
    }
    );

    const calcularConversion = (e) => {
        let soles = e.target.value;
        let dolares = soles / 3.5;
        let euros = soles / 4.5;
        let yenes = soles * 3.5;
        let libras = soles * 4.5;

        setMonedas({
            soles: soles,
            dolares: dolares,
            euros: euros,
            yenes: yenes,
            libras: libras,
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row m-2 text-center">
                    <div className="col-md-12">
                        <h1>Conversor de monedas</h1>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label>Soles</label>
                                        <input type="number" className="form-control" value={monedas.soles} onChange={(e) => calcularConversion(e)} />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Dolares</label>
                                        <input type="number" className="form-control" value={monedas.dolares} readOnly />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Euros</label>
                                        <input type="number" className="form-control" value={monedas.euros} readOnly />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Yenes</label>
                                        <input type="number" className="form-control" value={monedas.yenes} readOnly />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Libras</label>
                                        <input type="number" className="form-control" value={monedas.libras} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
    );
}

export default ConversorMonedas;