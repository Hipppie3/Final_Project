import {useState} from "react"

function SignUp() {
 const [username, setUserName] = useState("")
 const [password, setPassword] = useState("")
 const [passwordConfirmation, setPasswordConfirmation] = useState("")
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [imageUrl, setImageUrl] = useState("")
 const [bio, setBio] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault
  fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        passwordConfirmation,
        imageUrl,
        bio
      }),
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
              console.log("***errors: ", data.errors)
              setErrors(data.errors)
            });
        }
      })
    }
 return (
  <div className = "signUp">
   <h1> Welcome! </h1>
   <form className = "signUpForm" onSubmit={handleSubmit}>
      <input
     placeholder = "First Name"
     type = "text"
     id = "first_name"
     value = {firstName}
     onChange = {(e) => setPassword(e.target.value)}
     />
     <input
     placeholder = "Last Name"
     type = "text"
     id = "last_name"
     value = {lastName}
     onChange = {(e) => setPassword(e.target.value)}
     />
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
     placeholder = "Create Password"
     type = "password"
     id = "password"
     value = {password}
     onChange = {(e) => setPassword(e.target.value)}
     />
     <input
     placeholder = "Re-type Password"
     type = "password"
     id = "password_confirmation"
     value = {passwordConfirmation}
     onChange = {(e) => setPassword(e.target.value)}
     />
   
     <input
     placeholder = "Image Url"
     type = "file"
     id = "image_url"
     value = {imageUrl}
     onChange = {(e) => setPassword(e.target.value)}
     />
     <textarea
     placeholder = "Bio"
     type = "password"
     id = "bio"
     rows = "4"
     cols = "50"
     value = {bio}
     onChange = {(e) => setPassword(e.target.value)}
     ></textarea>
     <button className = "signupSubmit"
     type = "submit"> Submit </button>
   </form>
  </div>
 )
}

export default SignUp