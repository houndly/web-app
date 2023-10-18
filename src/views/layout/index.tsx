import { Outlet } from "react-router-dom"
import { DrawerMenu } from "../../components/menu"
import { Container } from "@mui/material"

export const Layout = () => {
    return (
        <section className="Container_Layout">
            <DrawerMenu />
            <section className="mx-width">
                {/* <Header /> */}
                <main className="mx-width-90 ml-5">
                    <Outlet />
                </main>
            </section>
        </section>
    )
}