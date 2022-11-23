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

   const porcHP = (pokedex.stats?.[0].base_stat / 150) * 100
   const porcSpeed = (pokedex.stats?.[5].base_stat / 150) * 100
   const porcAttack = (pokedex.stats?.[1].base_stat / 150) * 100
   const porcDefense = (pokedex.stats?.[2].base_stat / 150) * 100

   return (
      <div className="pokedex--detail">
         <div className="pokeball-background"></div>
         <div className="Detail--conteiner">
            <img
               src={pokedex.sprites?.other.dream_world.front_default}
               alt=""
            />
            <li className="weigh-height-box">
               <div>
                  <b>{pokedex.weight}</b>
                  <ul>Weight</ul>
               </div>
               <div>
                  <b>{pokedex.height}</b>
                  <ul>Height</ul>
               </div>
            </li>
            <h1>{pokedex.name}</h1>
            <p>
               #<b>{id}</b>
            </p>
         </div>
         <div className="types--grid">
            <h1>Type</h1>
            <div className="type--button">
               <div>{pokedex.types?.[0].type.name}</div>
            </div>
            <div className="type--button">
               <div>{pokedex.types?.[1]?.type.name}</div>
            </div>
         </div>

         <div className="types--grid">
            <h1>Abilities</h1>
            <div className="type--button">
               <div>{pokedex.abilities?.[0].ability.name}</div>
            </div>
            <div className="type--button">
               <div>{pokedex.abilities?.[1].ability.name}</div>
            </div>
         </div>
         <div>
            <div className="stats col-12 types--grid">
               <h1>Stats base</h1>
               <div className="item2">
                  <div className="title">
                     <span>HP:</span>
                  </div>
                  <div className="bar">
                     <div className="progress" style={{ width: `${porcHP}%` }}>
                        {pokedex.stats?.[0].base_stat}/150
                     </div>
                  </div>
               </div>
               <div className="item2">
                  <div className="title">
                     <span>Speed:</span>
                  </div>
                  <div className="bar">
                     <div
                        className="progress"
                        style={{ width: `${porcSpeed}%` }}
                     >
                        {pokedex.stats?.[5].base_stat}/150
                     </div>
                  </div>
               </div>
               <div className="item2">
                  <div className="title">
                     <span>Attack:</span>
                  </div>
                  <div className="bar">
                     <div
                        className="progress"
                        style={{ width: `${porcAttack}%` }}
                     >
                        {pokedex.stats?.[1].base_stat}/150
                     </div>
                  </div>
               </div>
               <div className="item2">
                  <div className="title">
                     <span>Defense:</span>
                  </div>
                  <div className="bar">
                     <div
                        className="progress"
                        style={{ width: `${porcDefense}%` }}
                     >
                        {pokedex.stats?.[2].base_stat}/150
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="types--grid movements">
            <div>
               <div>
                  <h1>Movements</h1>
               </div>
               <div></div>
            </div>
            <table className="table">
               <tbody className="">
                  <tr className="">
                     <td className="">{pokedex.moves?.[0]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[1]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[2]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[3]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[4]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[5]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[6]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[7]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[8]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[9]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[10]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[11]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[12]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[13]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[14]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[15]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[16]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[17]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[18]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[19]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[20]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[21]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[22]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[23]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[24]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[25]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[26]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[27]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[28]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[29]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[30]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[31]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[32]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[33]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[34]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[35]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[36]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[37]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[38]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[39]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[40]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[41]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[42]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[43]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[44]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[45]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[46]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[47]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[48]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[49]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[50]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[510]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[52]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[53]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[54]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[55]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[56]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[57]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[58]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[59]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[60]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[61]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[62]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[63]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[64]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[65]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[66]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[67]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[68]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[69]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[70]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[71]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[72]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[73]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[74]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[75]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[76]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[77]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[78]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[79]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[80]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[81]?.move.name}</td>
                  </tr>
                  <tr className="">
                     <td className="">{pokedex.moves?.[82]?.move.name}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default PokedexDetail
