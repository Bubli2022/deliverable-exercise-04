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
      <div>
         <h1>Input Your Name</h1>
         <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
         />
         <button onClick={dispatchUserName} className="btn">
            Send
         </button>
      </div>
   )
}

export default InputName
