import axios from "axios";
import { createContext, useState } from "react";

const ClimaContext = createContext();

export const ClimaProvider = ({children}) => {

    const [ busqueda , setBusqueda ] = useState({
        ciudad: '' ,
        pais: ''
    })

    const [ resultado , setResultado ] = useState({});
    const [ cargando , setCargando ] = useState(false);
    
    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = async datos => {
        setCargando(true)
        try {
            
         const { ciudad , pais } = datos
         const appId = import.meta.env.VITE_API_KEY
         const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
         const { data } = await axios(url)
         console.log(data[0]);
         const { lat , lon } = data[0]
         const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
         const { data: clima } = await axios(urlClima)
         setResultado(clima);
         setCargando(false)
        } catch (error) {
            console.log(error);
        }
            
    }

  return (
        <ClimaContext.Provider
            value={{
                busqueda,
                resultado,
                cargando,
                datosBusqueda,
                consultarClima
            }}
        >
            {children}
        </ClimaContext.Provider>
  )
}

export { 
    ClimaContext 
}