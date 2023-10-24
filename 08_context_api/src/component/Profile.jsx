import {useContext} from 'react'
import usercontext from '../context/usercontext'

function Profile() {
    const {user}= useContext(usercontext)
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.userName}</div>
}

export default Profile
