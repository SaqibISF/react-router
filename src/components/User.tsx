import { useParams } from "react-router-dom"

const User = () => {

  const { id, username } = useParams()

  return (
    <div className="text-center p-5 text-3xl">User: {id} {username}</div>
  )
}

export default User