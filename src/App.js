import './App.css';
import Boton from './componentes/boton';
import  logo from './imagenes/logo.png';
import '../src/stylesheet/Boton.css'
import Contador from './componentes/contador';
import '../src/stylesheet/contador.css'
import { useState } from 'react';

function App() {

    const [numClicks, setNumClicks] =useState(0); 

    const manejarClick = () => {
        
        setNumClicks(numClicks + 1);
    }

    const reiniciarContador = () => {
        console.log("reinicio");
        setNumClicks(0);
    }

  return (
    <div className="App">
        
        <div className='Body-App'>

            <div className='contenedor-logo-app'>
                <img className='logo-app'
                src={logo}
                alt='Logo de ContadorCliks'
                />
            </div>

            <div className='contenedor-contador'>

                <Contador
                    numClicks={numClicks}
                />
                <Boton 
                    texto="Clic"
                    esBotonDeClick={true}
                    manejarClick={manejarClick}            
                />

                <Boton 
                    texto="Reiniciar"
                    esBotonDeClick={false}
                    manejarClick={reiniciarContador}
                />
            </div>

        </div>
        
        <div className='footer-App'>
            <h4>@Desarrollado por Facundo Medina</h4>
        </div>

       

    </div>

    

  );

  

}

export default App;
