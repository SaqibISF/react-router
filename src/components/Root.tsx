import { Outlet } from "react-router"
import { Header, Footer } from "."

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root