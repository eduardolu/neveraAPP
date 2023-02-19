import React from 'react'

export const Congelador = () => {
  return (
    <div className=' m-12 shadow-xl rounded-lg divide-y bg-blue-500 gap-6' id='congelador' >
        <header className='text-white text-3xl text-center font-bold'>
            <h1>Congelador</h1>
            <br />
        </header>
        <div className='text-white text-center'>
            <ul className='divide-y divide-green-200 gap-2'>
                <li>tapper</li>
                <li>tapper2</li>
                <li>tapper3</li>
            </ul>
        </div>
    </div>
  )
}
