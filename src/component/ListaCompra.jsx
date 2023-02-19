import React from 'react'

export const ListaCompra = () => {
  return (
    <div className='bg-red-400 m-12 shadow-xl rounded-lg divide-y' id='#compra'>
        <header className='text-white text-3xl text-center font-bold'>
            <h1>Lista de compra</h1>
            <br />
        </header>
        <div className='text-white text-center '>
            <ul className='divide-y divide-green-200'>
                <li>listado</li>
                <li>listado2</li>
                <li>listado3</li>
            </ul>
        </div>
    </div>
  )
}
