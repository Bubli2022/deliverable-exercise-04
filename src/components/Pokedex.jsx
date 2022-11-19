import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PokedexCard from "./PokedexCard"

const Pokedex = () => {
   const name = useSelector((state) => state.userName)

   const [pokedexList, setPokedexList] = useState([])
   const [locationsList, setLocationsList] = useState([])
   const [nameInput, setNameInput] = useState("")

   const navigate = useNavigate()

   useEffect(() => {
      axios
         .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500/")
         .then((res) => setPokedexList(res.data.results))

      axios
         .get("https://pokeapi.co/api/v2/type/")
         .then((res) => setLocationsList(res.data.results))
   }, [])

   // console.log(pokedexList)
   console.log(locationsList)

   const searchName = () => {
      navigate(`/pokedex/${nameInput.toLowerCase()}`)
   }

   const searchLocations = (locationsUrl) => {
      axios
         .get(locationsUrl)
         .then((res) =>
            setPokedexList(res.data.pokemon.map((pokemon) => pokemon.pokemon))
         )
   }

   const [page, setPage] = useState(1)
   const pokedexPerPage = 30
   const lastCharacterIndex = page * pokedexPerPage //15;
   const firstCharacterIndex = lastCharacterIndex - pokedexPerPage // 10
   const pokedexPaginated = pokedexList?.slice(
      firstCharacterIndex,
      lastCharacterIndex
   )

   const totalPages = Math.ceil(pokedexList?.length / pokedexPerPage)
   const pagesNumbers = []
   for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i)
   }

   return (
      <div>
         <h1>Pokedex</h1>
         <p>Welcome {name}, here you can find your favorite pokemon... </p>
         <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev page
         </button>

         {pagesNumbers.map((number) => (
            <button key={number} onClick={() => setPage(number)}>
               {number}
            </button>
         ))}

         <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
         >
            Next page
         </button>
         <div>
            <input
               type="text"
               placeholder="Buscar por Nombre"
               value={nameInput}
               onChange={(e) => setNameInput(e.target.value)}
            />
            <button onClick={searchName}>Search</button>
         </div>

         <div>
            <select onChange={(e) => searchLocations(e.target.value)}>
               <option value="">Selecct a ubication</option>
               {locationsList.map((location) => (
                  <option value={location.url} key={location.url}>
                     {location.name}
                  </option>
               ))}
            </select>
         </div>

         <ul className="container">
            {pokedexPaginated?.map((pokedex) => (
               <PokedexCard url={pokedex.url} key={pokedex.url} />
            ))}
         </ul>
      </div>
   )
}

export default Pokedex
