import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams()
  return (
    <div className="bg-gray-600 text-3xl text-white p-4 text-center">UserId : {userId}</div>
  )
}

export default User