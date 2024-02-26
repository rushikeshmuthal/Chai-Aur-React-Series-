import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData]= useState([])
    // useEffect(() => {
    //  fetch("https://api.github.com/users/whitedevil9850")
    //  .then((res)=> res.json())
    //  .then((data)=>  {
    //     console.log(data)
    //  setData (data)})
    // },[])
    
  return (

    <div className="text-center text-white  m-4 text-3xl p-4 bg-gray-600">Githubfollowers:{data.followers}
    <img src={data.avatar_url}  width={300} alt="" /> </div>
    
  )
}

export default Github
export const gihubLoaderInfo = async()=> {
    const response = await fetch("https://api.github.com/users/whitedevil9850")
    return response.json()
}