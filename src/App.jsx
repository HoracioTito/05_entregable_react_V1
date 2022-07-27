
/*  Import Router */
import { HashRouter, Routes, Route } from 'react-router-dom'

/* Import Componet  */
import UserInput from './components/UserInput'
import Pokemons from './components/Pokemons'
import PokemonDetail from './components/PokemonDetail'

/*  Proteccion de rutas  */
import ProtectedRoutes from './components/ProtectedRoutes'
/* Setting */
import Setting from './components/Setting'


import './css/style.css'
/* https://www.youtube.com/c/OnlineTutorials4Designers/videos */



function App() {


  return (
    <div className='App'>

      <HashRouter>
        <div className='banner' id='banner'></div>
        <Routes>
          <Route path="/" element={<UserInput />} />

          {/* Proteccion de rutas */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokemon" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="/setting" element={<Setting />} />
          </Route>

        </Routes>
        <br/>
        <br/>
        <br/>
        <div className="footer-color ">
          <div className="my-info">
            <h2 className="ecommers">Pokedex V01</h2>
            <h4>Horacio Choque</h4>
            <h5>Hecho en Academlo</h5>
            <br />
          </div>
        </div>
      </HashRouter>


    </div>
  )
}

export default App
