import { Congelador, ListaCompra, Navbar } from './component'

import React from 'react'
import NavRed from './component/NavRed'
import { AddOutlined } from '@mui/icons-material'

export const App = () => {
  return (
    <div>
      <NavRed />
      {/* <Navbar /> */}
      <h1 className='text-zinc-500 text-xl text-center'>Nevera</h1>

      <ListaCompra />
      <Congelador />
      <button className='bg-red-600 hover:bg-red-900 rounded-full shadow-xl p-5 absolute bottom-0 right-0 m-4'>
        <AddOutlined />
      </button>

    </div>
    
  )
}

