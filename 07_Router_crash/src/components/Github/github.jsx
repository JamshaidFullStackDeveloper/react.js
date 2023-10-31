// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"
function Github() {
    //use useloaderdata hook
    const data = useLoaderData()
    ////use usestate & useffect hook
    // const [data , setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/JamshaidFullStackDeveloper')
    //     .then(response=>response.json())
    //     .then(data=>{console.log(data);
    //     setdata(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers:{data.followers}
      <img src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
     const response = await fetch('https://api.github.com/users/JamshaidFullStackDeveloper')
     return response.json()
}
