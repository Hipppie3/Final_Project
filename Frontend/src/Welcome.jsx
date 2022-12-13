
function Welcome ({user}) {
 console.log(user)
 return (
  <h1>
   Hello {user.username}!
  </h1>
 )
}

export default Welcome