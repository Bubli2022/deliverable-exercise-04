import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PokedexCard = ({ url }) => {
   const [pokedex, setPokedex] = useState({})

   const navigate = useNavigate()

   useEffect(() => {
      axios.get(url).then((res) => setPokedex(res.data))
   }, [])
   // console.log(pokedex)

   return (
      <li className="item">
         <div onClick={() => navigate(`/pokedex/${pokedex.id}`)}>
            <div className="card">
               <h3>{pokedex.name}</h3>
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
