import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const route = useRouter()
    const selector = useSelector(state => state.addToCartReducer.cart.length)

    return (
        <div className='sticky top-0 flex flex-row md:justify-around justify-between px-10 md:px-0 items-center bg-slate-700 text-white p-3'>
            <div className='flex flex-row items-center space-x-3'>
                <p className='cursor-pointer text-2xl' onClick={() => route.push('/')}>AmKart</p>
                <input type="text" name="" id="" placeholder='Search here...' className=' hidden md:block p-1 pl-3' />
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <p className='cursor-pointer text-2xl'>Ankit</p>
                <p className='cursor-pointer relative' onClick={() => route.push('/cart')}>
                    <span className='text-2xl'>🛒</span>
                    <span className='bg-slate-100 text-black rounded-full h-5 w-5 absolute -top-2 -right-2 '>
                        <span className='relative left-[5px] text-sm -top-[3px] text-center'>{selector}</span>

                    </span>
                </p>
            </div>
        </div>
    )
}

export default Navbar