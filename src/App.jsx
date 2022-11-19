import { HashRouter, Route, Routes } from "react-router-dom"
import InputName from "./components/InputName"
import Pokedex from "./components/Pokedex"
import PokedexDetail from "./components/PokedexDetail"
import ProtectedRoutes from "./components/ProtectedRoutes"
import "./styles.css"

function App() {
   return (
      <HashRouter>
         <div className="App">
            <Routes>
               <Route path="/" element={<InputName />} />

               <Route element={<ProtectedRoutes />}>
                  <Route path="/pokedex" element={<Pokedex />} />
                  <Route path="/pokedex/:id" element={<PokedexDetail />} />
               </Route>
            </Routes>
         </div>
      </HashRouter>
   )
}

export default App
