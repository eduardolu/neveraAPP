import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from './MenuItem'
import { MenuOutlined } from '@mui/icons-material';

export default function NavRed() {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='text-white w-full flex justify-between p-4 items-center bg-black'> 
        {/* quite  fixed */}
            <div className="text-2xl font-bold text-center uppercase">
                <h1>Nevera<span className='block text-yellow-400 uppercase text-4xl'>app</span></h1>
            </div>
            <div>
            <img src="../img/logo.png" alt="logo" />
            </div>
            <nav>
                <div className='absolute right-6 md:hidden top-4 scale-150'>
                    <MenuOutlined onClick={showMenu} />
                </div>
                <ul className='hidden md:flex gap-8 p-6 bg-white/10'>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/'>Compra</Link></li>
                    <li><Link to='/'>Congerador</Link></li>
                    <li><Link to='/'>Sobre Mí</Link></li>
                </ul>
                <MenuItem showMenu={showMenu} active={active}/>
            </nav>
        </div>
    )
}
