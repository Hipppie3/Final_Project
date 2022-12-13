import {useState} from "react"

function Login() {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
   fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      // clear errors
      console.log("***test")
      if (res.ok) {
          console.log("***response status", res.status)
          res.json()
          .then((user) => {
            console.log("***user: ", user)
            setUser(user)
            });
          // route to profile
        } else {
          console.log("***response status", res.status)
          res.json()
            .then((data) => {
              console.log("***errors: ", data.error)
              setErrors(data.error)
            });
        }
      })
    }
 return(
  <div className = "login">
   <h1> Login </h1>
   <form className = "loginForm" onSubmit={handleSubmit}>
    <input
     className ="input"
     placeholder = "Enter Username"
     type = "text"
     id = "username"
     autoComplete = "off"
     value = {username}
     onChange = {(e) => setUserName(e.target.value)}
    />
    <input
     placeholder = "Enter Password"
     type = "password"
     id = "password"
     value = {password}
     onChange = {(e) => setPassword(e.target.value)}
     />
     <button className = "signupSubmit"
     type = "submit"> Submit </button>
   </form>
  </div>
 )
}

export default Login