import React from 'react'
type Props = {}

function Footer({}: Props) {
  return (
    <div className='mt-12'>
        <h1 className='text-sm text-bold tracking-widest mb-4 text-gray-500'>©Gabriel Dubois {new Date().getFullYear()}.</h1>
    </div>
  )
}

export default Footer