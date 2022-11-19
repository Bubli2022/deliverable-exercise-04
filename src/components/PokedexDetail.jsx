import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PokedexDetail = () => {
   const { id } = useParams()
   const [pokedex, setPokedex] = useState({})

   useEffect(() => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then((res) => setPokedex(res.data))
   }, [id])

   console.log(pokedex)

   return (
      <div>
         <h1>{pokedex.name}</h1>
         <img src={pokedex.sprites?.other.dream_world.front_default} alt="" />
         <p>
            Mostrando personaje con id: <b>{id}</b>
         </p>
      </div>
   )
}

export default PokedexDetail
