import { Contexto } from "../../context/Context";
import { useContext } from "react";

const ColorInput = () => {
    let {setCssColor,cssColor} = useContext(Contexto);
    const cambiarColor = (e) => {
        setCssColor(e.target.value);
    }
    return (
        <input type="color" onChange={cambiarColor} value={cssColor} />
    )
}


export default ColorInput;
