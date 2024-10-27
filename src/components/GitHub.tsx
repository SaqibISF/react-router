import { useLoaderData } from "react-router-dom"

const GitHub = () => {

    const data = useLoaderData() as { [key: string]: number }

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            GitHub Public Repos: {data ? data.public_repos : 'Loading...'}
            <img src={String(data && data.avatar_url)} alt="GitHub picture" width={300} />
        </div>
    )
}

export default GitHub