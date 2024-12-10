import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <h1>Header</h1>

            <div>
                <Outlet/>
            </div>
        </div>
    )
}