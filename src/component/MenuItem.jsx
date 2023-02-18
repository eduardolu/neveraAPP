import { Close } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({showMenu,active}) => {
  return (
    <div>
      <ul className={active ? 'flex-col flex items-center mr-1 fixed inset-0 left-1/4 bg-cyan-400/40 backdrop-blur-lg justify-center P-8 gap-8 md:hidden' : 'hidden'}>
        <Close onClick={showMenu}/>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/'>Compra</Link></li>
        <li><Link to='/'>Congerador</Link></li>
        <li><Link to='/'>Sobre Mí</Link></li>
      </ul>
    </div>
  )
}
