
import { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import ListView from "../../pages/ListView";

import { MenuContext } from '../../context';

function Dashboard() {
    const [menuStatus, setMenuStatus] = useState('close');

    return (
        <MenuContext.Provider value={[menuStatus, setMenuStatus]}>
            <div className="flex flex-col">
                <Header />
                <div>
                    <div className="flex gap-4">
                        <Sidebar />
                        <ListView />
                    </div>
                </div>
            </div>
        </MenuContext.Provider>
    )
}

export default Dashboard;