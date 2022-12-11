import {useState} from "react"
function Form() {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("")

 return(
  <div className = "signup">
   <h1> Sign Up </h1>
   <form className = "signupForm">
    <input
     className ="input"
     placeholder = "Enter Username"
     type = "text"
     id = "username"
     autoComplete = "off"
     value = {username}
     onChange = {(e) => console.log(setUserName(e.target.value))}
    />
    <input
     placeholder = "Enter Password"
     type = "password"
     id = "password"
     value = {password}
     onChange = {(e) => console.log(setPassword(e.target.value))}
     />
     <input
     placeholder = "Re-enter Password"
     type = "password"
     id = "password_confirmation"
     value = {passwordConfirmation}
     onChange = {(e) => console.log(setPasswordConfirmation(e.target.value))}
     />
     <button className = "signupSubmit"
     type = "submit"> Submit </button>
   </form>
  </div>
 )
}

export default Form