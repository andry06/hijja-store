import { Outlet } from "react-router-dom";
import TopBar from "./component/TopBar";

const HijjaStore = () => {
    return (
        <div>
            <TopBar />
                <Outlet />
        </div>
    )
}

export default HijjaStore;