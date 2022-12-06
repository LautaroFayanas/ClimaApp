import useClima from '../hooks/useClima'
import { Formulario } from './Formulario'
import { Resultado } from './Resultado'

export const AppClimax = () => {

  const { resultado } = useClima()

  return (
    <>
        <main className='dos-columnas'>
                <Formulario />

                {resultado?.name && <Resultado /> }
                
        </main>
    </>  
    )
}
