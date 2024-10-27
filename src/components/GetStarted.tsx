import { useRef } from "react"
import { useNavigate } from "react-router"

const GetStarted = () => {

    const fullName = useRef<HTMLInputElement>(null)
    const userName = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    return (
        <form className="p-6 flex flex-col justify-center max-w-min mx-auto"
            onSubmit={(e) => {
                e.preventDefault()
                if (fullName.current && userName.current) 
                    navigate(`/user/${fullName.current.value}/${userName.current.value}`)
            }}>
            <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                    Full Name
                </label>
                <input ref={fullName}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="username" className="hidden">
                    Username
                </label>
                <input ref={userName}
                    type="name"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">
                Submit
            </button>
        </form>
    )
}

export default GetStarted