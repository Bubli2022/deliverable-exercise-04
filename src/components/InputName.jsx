import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changeName } from "../store/slice/userName.slice"
import { useNavigate } from "react-router-dom"

const InputName = () => {
   const dispatch = useDispatch()
   const [userName, setUserName] = useState("")

   const navigate = useNavigate()

   const dispatchUserName = () => {
      dispatch(changeName(userName))
      navigate("/pokedex")
   }

   return (
      <div className="App">
         <div>
            <div className="beginning container">
               <div className="pokeball-background"></div>

               <div className="banner">
                  <h2 className="title">Hello trainer!</h2>

                  <img
                     alt=""
                     src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
                  />
               </div>
               <form>
                  <p>Give me your name to start</p>
                  <input
                     type="text"
                     value={userName}
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <button onClick={dispatchUserName}>
                     <i className="fas fa-paper-plane"></i>
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default InputName
