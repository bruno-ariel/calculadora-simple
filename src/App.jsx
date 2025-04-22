import Boton from './components/Boton'
import './App.css'

function App() {
  
  const manejarClickNumeros = (e) => {
    const botn = e.target
    console.log(botn.textContent)
    let display = document.getElementById("display")
    display.value = display.value + botn.textContent
  }

  const clear = () => {
    let display = document.getElementById("display")
    display.value = ""
  }

  const calcular = () => {
    let display = document.getElementById("display")
    display.value = eval(display.value)
  }

  return(
    <div className="contenedor">
      <div className='pad'>
        <input className="display" type="text" id="display"/>
        <Boton 
        texto="1"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="2"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="3"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="+"
        operacion={manejarClickNumeros}
        tipo="operacion"
        />
        <Boton 
        texto="4"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="5"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="6"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="-"
        operacion={manejarClickNumeros}
        tipo="operacion"
        />
        <Boton 
        texto="7"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="8"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="9"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="*"
        operacion={manejarClickNumeros}
        tipo="operacion"
        />
        <Boton 
        texto="="
        operacion={calcular}
        tipo="normal"
        />
        <Boton 
        texto="0"
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="."
        operacion={manejarClickNumeros}
        tipo="normal"
        />
        <Boton 
        texto="/"
        operacion={manejarClickNumeros}
        tipo="operacion"
        />

        <Boton 
        texto="Clear"
        operacion={clear}
        tipo="Clear"
        />
      </div>
    </div>
  )
}

export default App
