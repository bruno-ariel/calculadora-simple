import "../stylesheets/Boton.css"

const Boton = ({texto, operacion, tipo}) => {
    return (
        <>
        <button
        className={tipo=="normal"?"boton-normal":tipo=="operacion"?"boton-operacion":"boton-clear"}
        onClick={operacion}
        >{texto}</button>
        </>
    );
}

export default Boton