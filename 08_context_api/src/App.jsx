import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContextProvider from "./context/usercontextprovider"

function App() {

  return (
    <UserContextProvider>
     <h1>React with Context Api</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
