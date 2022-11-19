import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PokedexCard = ({ url }) => {
   const [pokedex, setPokedex] = useState({})

   const navigate = useNavigate()

   useEffect(() => {
      axios.get(url).then((res) => setPokedex(res.data))
   }, [])
   console.log(pokedex)

   return (
      <li className="item">
         <div onClick={() => navigate(`/pokedex/${pokedex.id}`)}>
            <div className="card row">
               <div className="text">
                  <h3>{pokedex.name}</h3>
                  <p className="cloud">
                     <b>Types:</b>{" "}
                     <span>{pokedex.types?.[0]?.type?.name}, </span>
                     <span>{pokedex.types?.[1]?.type?.name}</span>
                  </p>
                  <div>
                     <div className="cloud">
                        <b>hp:</b> {pokedex.stats?.[0]?.base_stat}
                     </div>
                  </div>
                  <div>
                     <div className="cloud">
                        <b>attack:</b> {pokedex.stats?.[1]?.base_stat}
                     </div>
                  </div>
                  <div>
                     <div className="cloud">
                        <b>defense:</b> {pokedex.stats?.[2]?.base_stat}
                     </div>
                  </div>
                  <div>
                     <div className="cloud">
                        <b>speed:</b> {pokedex.stats?.[5]?.base_stat}
                     </div>
                  </div>
               </div>

               <img
                  src={pokedex.sprites?.other.dream_world.front_default}
                  alt=""
               />
            </div>
         </div>
      </li>
   )
}

export default PokedexCard
