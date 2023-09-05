import { useContext } from 'react';
import MenuIcon from '../../assets/menu.svg';
import { MenuContext } from '../../context';

function Header() {
    const [menuStatus, setMenuStatus] = useContext(MenuContext);

    function handleMenuClick() {
        if(menuStatus === 'close'){
            setMenuStatus('open')
        }else {
            setMenuStatus('close')
        }
    }

    return (
        <>
            <div className="sticky h-[80px] p-4 bg-white border-b border-b-gray-300">
                <div className="max-w-6xl mx-auto">
                    <div className='flex items-center gap-2'>
                        <img className={`lg:hidden h-8 w-8 cursor-pointer ${menuStatus === 'open' ? '-rotate-90 duration-200':''}`} src={MenuIcon} onClick={handleMenuClick}></img>
                        <h1 className="text-4xl">
                            <a href="/">Products App</a>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
