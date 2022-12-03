import { AppClimax } from "./components/AppClimax"
import { ClimaProvider } from "./context/ClimaProvider"

function App() {


  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Climas</h1>
      </header>
        <AppClimax />
    </ClimaProvider>
  )
}

export default App
