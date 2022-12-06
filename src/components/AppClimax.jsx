import useClima from '../hooks/useClima'
import { Formulario } from './Formulario'
import { Resultado } from './Resultado'
import { Spinner } from './Spinner'

export const AppClimax = () => {

  const { resultado , cargando } = useClima()

  return (
    <>
        <main className='dos-columnas'>
                <Formulario />

                { cargando? <Spinner /> :
                
                resultado?.name && <Resultado /> }
                
        </main>
    </>  
    )
}
