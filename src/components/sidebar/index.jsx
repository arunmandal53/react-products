
import { useContext } from 'react';
import ListIcon from '../../assets/list.svg';

import { MenuContext } from '../../context';

function Sidebar() {

    const [menuStatus, ] = useContext(MenuContext);

    return (
        <div className={`${menuStatus == 'close' ? 'hidden':''} lg:flex h-[calc(100vh-80px)] lg:justify-end w-72 p-4 border-r border-r-gray-300`}>
            <nav className="flex flex-col gap-3">
                <div className="flex gap-3 items-center p-2 border-l-4 border-blue-800 cursor-pointer hover:bg-slate-100">
                    <img src={ListIcon} className="w-4 h-4"></img>
                    <h3 className='text-blue-700 font-medium'>Products</h3>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;